import React,{useState} from "react"
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { orange, grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar'; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: 'orange',
    backgroundColor: orange[400],
  },
  grey: {
      color: 'grey',
      backgroundColor: grey[500],
  },
  orange2: {
    color: '#fff3e0',
    backgroundColor: orange[50],
  },
  numeros: {
      color:'black',
  },
  links:{
    textDecoration: 'none',
    color: 'white'
  },
}));


const ItemCount = ({restarCantidad,aumentarCantidad,confirmarComprar, cantidad,}) => {
    const classes = useStyles();
    const[confirmarCarro, setConfirmarCarro] = useState(true)
 


    const validarCarro =() =>{
       setConfirmarCarro(!confirmarCarro)
 
    }

    const funcionCarro =() =>{
      confirmarComprar();

    }

    const ejecutarFunciones =() =>{
      validarCarro()
      funcionCarro()
    }

    return (
      <section >
           <div className={classes.root}>
                  {confirmarCarro?(<>
                    <ButtonGroup disableElevation variant="contained" color="primary"> 
                    <Avatar className={classes.orange}>
                    <Button onClick={restarCantidad}>-</Button>
                      
                    </Avatar>
                    <Avatar className={classes.orange2} variant="rounded">
                      <h6 className={classes.numeros}>{cantidad}</h6>
                    </Avatar>
                    <Avatar className={classes.orange}> 
                      
                    <Button onClick={aumentarCantidad}>+</Button>
                    </Avatar>
                </ButtonGroup>
                <Button variant="contained" color="default" onClick={ejecutarFunciones} >Agregar</Button>
                    </>
                  ):(
                    <ButtonGroup disableElevation variant="contained" color="primary"> 
                    <Button variant="contained" color="primary" ><Link to={'/cart'} className={classes.links}>Finalizar Compra</Link></Button>
                    <Button variant="contained" color="default" onClick={validarCarro}>Cancelar</Button>
                    </ButtonGroup>

                  )

                  }
            </div>
          
      </section>
    );
  }


export default ItemCount;