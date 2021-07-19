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
 


const useStyles = makeStyles((theme) => CartStyle(theme));

   


const Cart = props => {

    const [open, setOpen] = React.useState(false);
    const [carro,setCarro] = useContext(CartContext)
    const [carroCompras,setCarroCompras] = useState([])
    const [totalPago,setTotalPago] = useState(0)
    const prePedidoEspecifico = dataBase.collection('prePedido').doc(carro)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    const classes = useStyles();
 
    useEffect(() =>{
        
     calcularTotal()
     obtenerCarro()
    },[])
    
    const calcularTotal=() =>{ };
const vaciarCarro=() =>{ 
 
    handleClose()
     
};

const obtenerCarro = () =>{
  prePedidoEspecifico.get().then((querySnapshot) =>{
    if(querySnapshot.size === 0){
      console.log('No Result');
    }
 
     setCarroCompras(querySnapshot.data().items) 
})}   
    
    return (<Container fixed> {console.log(carroCompras)}
         
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              
    {   
        carro.length?(<Card className={classes.root}>
          <Typography variant="h6" className={classes.title}>
                Carro de Compras
              </Typography>
            <List  >
            {carroCompras.map((item, i) => <ListItem>
                  <ListItemAvatar>
                         <Avatar alt={item.producto.alt} src={item.producto.img1}/>
                         
                  </ListItemAvatar>
                  <ListItemText
                    priary={item.producto.titulo}
                    secondary={`Cantidad: ${item.cantidad} Precio: ${item.producto.precio} Total: ${item.producto.precio*item.cantidad}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)}
                <ListItemText
                    primary='TOTAL:'
                    secondary={totalPago}
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
          </Card>):(<CarroVacio></CarroVacio> )
    }
             
            </Grid>
            
          <Grid item xs={12} md={6}>
          {carro.length?(<FormularioCompra/>):(<></>)}
                
          </Grid> 
          </Grid>
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
    
 
    // return <ul>
    //     {console.log(carro)}
    // {carro.map((producto, i) => <li key={i}>{item.producto.cantidadProducto}{item.producto.categoria}{item.producto.precio}</li>)}
    // </ul>
 
     
}

export default Cart
