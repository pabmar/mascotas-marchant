import React, { useState,useEffect }  from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import FormularioCompra from './Formulario/FormularioCompra';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import { CartStyle } from './CartStyle';
 
import CarroVacio from './CarroVacio/CarroVacio';
import { dataBase } from '../../Firebase/firebase';
import 'firebase/firestore'
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => CartStyle(theme));

   


const Cart = props => {

    const [open, setOpen] = useState(false);
    const [carro,setCarro] = useContext(CartContext)
    const [carroCompras,setCarroCompras] = useState([])
    const [barraCarga,setBarraCarga] = useState(true)
    const [totalPago,setTotalPago] = useState(0)
    const prePedidoEspecifico = dataBase.collection('prePedido').doc(carro.id)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    const classes = useStyles();
 
    useEffect(() =>{
      setBarraCarga(false)
     obtenerCarro() 
     
     
    },[])
    useEffect(() =>{
      calcularTotal()
     
    },[carroCompras])
    
    
const calcularTotal=() =>{ 
  
  const totales = carroCompras.map((item) => { 
    return (item.producto.precio*item.cantidad)
   })
   const sumaPrecios = totales.reduce((prev, next) => prev + next, 0);  
   setTotalPago(sumaPrecios)
};
const vaciarCarro=() =>{ 
    prePedidoEspecifico.delete().then(
      setCarro({id:'nuevo',productos:0})
      
    ).finally(()=>{
      setCarroCompras([])
      obtenerCarro()

    })
    handleClose()
     
};

const obtenerCarro = () =>{
  prePedidoEspecifico.get().then((querySnapshot) =>{
    if(querySnapshot.size === 0){
      console.log('No Result');
    }
    
     setCarroCompras(querySnapshot.data().items) 
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  setBarraCarga(true)

})}

const eliminarProducto = (ideliminar) =>{
  prePedidoEspecifico.get().then((querySnapshot) =>{
    if(querySnapshot.size === 0){
      console.log('No Result');
    }
    const carritoCompras = [...(querySnapshot.data().items.filter(i =>   i.producto.id !== ideliminar))]
    
    prePedidoEspecifico.update({
      
      items:carritoCompras
    }).then(()=>{
      
      
      obtenerCarro()
      carritoCompras.length?(setCarro({id:carro.id,productos:carro.productos-1})):(setCarro({id:'nuevo',productos:0}))
    }).catch((err) =>{
      console.log(err)
    })
   
   })
}

    return (<Container fixed>  
         
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              
              
    {   barraCarga?(
        carroCompras.length?(<Card className={classes.root}>
          <Typography variant="h6" className={classes.title}>
                Carro de Compras
              </Typography>
            <List  >
            {carroCompras.map((item, i) => <ListItem>  
                  <ListItemAvatar>
                         <Avatar alt={item.producto.alt} src={item.producto.img1}/>
                         
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.producto.titulo}
                    secondary={`Cantidad: ${item.cantidad} Precio: $${item.producto.precio}.- Total: $${item.producto.precio*item.cantidad}.-` }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => { eliminarProducto(item.producto.id) }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)}
                <ListItemText
                    primary={`TOTAL: $${totalPago}.-`}
                    
                  />
                <Button
                      variant="contained"
                      color="primary"
                      className={classes.margin}
                      endIcon={<StorefrontSharpIcon/>}
                    >
                      <Link to={'/'} className={classes.links}>Seguir comprando</Link>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.margin}
                      endIcon={<DeleteIcon />}
                      size = 'medium'
                      onClick={handleClickOpen}
                    >
                      Vaciar Carro
                    </Button>
                
            </List>
          </Card>):(<CarroVacio></CarroVacio> )):(
            <Box display="flex" justifyContent="center  ">
            <CircularProgress />
         </Box>
          )
    }
             
            </Grid>
            
          <Grid item xs={12} md={6}>
          {carroCompras.length?(<FormularioCompra carroCompras={carroCompras} totalPago={totalPago}/>):(<></>)}
                
          </Grid> 
          </Grid>
          <div>
      
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-vaciarCarro"
              aria-describedby="alert-vaciarCarro"
            >
              <DialogTitle id="alert-vaciarCarro"><WarningIcon/>Eliminacion de carro de compra</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-vaciarCarro">
                  ¿desea vaciar el carro de compras?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={vaciarCarro} color="primary">
                  Aceptar
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div>
      
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title"><WarningIcon/>Eliminacion de carro de compra</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿desea vaciar el carro de compras?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={vaciarCarro} color="primary">
                  Aceptar
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          </Container>
 
       );
    
 
    
 
     
}

export default Cart
