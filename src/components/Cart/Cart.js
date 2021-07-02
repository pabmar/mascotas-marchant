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

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

   


const Cart = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [carro,setCarro] = useContext(CartContext)
    const [totalPago,setTotalPago] = useState(0)

    const classes = useStyles();
 
    useEffect(() =>{
        
     calcularTotal()
    },[])
    
    const calcularTotal=() =>{ 
        carro.forEach(d => {
         setTotalPago(totalPago + (d.precio*d.cantidadProducto))
         
})};
const vaciarCarro=() =>{ 
    setCarro([])
    handleClose()
     
};
         
    
    return (<Container fixed> 
         
          <Grid container spacing={2}><>{console.log(carro.length)}</>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Carro de Compras
              </Typography>
    {   
        carro.length?(<div className={classes.demo}>
            <List  >
            {carro.map((producto, i) => <ListItem>
                  <ListItemAvatar>
                         <Avatar alt={producto.alt} src={producto.img}/>
                         
                  </ListItemAvatar>
                  <ListItemText
                    primary={producto.titulo}
                    secondary={`Cantidad: ${producto.cantidadProducto} Precio: ${producto.precio} Total: ${producto.precio*producto.cantidadProducto}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)}
                <ListItem>
                  <ListItemAvatar>
                                                 
                  </ListItemAvatar>
                  <ListItemText
                    primary='TOTAL:'
                    secondary={totalPago}
                  />
                  <ListItemSecondaryAction>
                  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Vaciar Carro<DeleteIcon />
      </Button>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>):(<div>Su Carro esta vacio</div>)
    }
              
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
    // {carro.map((producto, i) => <li key={i}>{producto.cantidadProducto}{producto.categoria}{producto.precio}</li>)}
    // </ul>
 
     
}

export default Cart
