import React,{useState} from "react"
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'; 
import { ItemCountStyle } from "./ItemCountStyle";

const useStyles = makeStyles((theme) => ItemCountStyle(theme));


const ItemCount = ({restarCantidad,aumentarCantidad,confirmarComprar, cantidad,stock}) => {
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
                {stock?(<Button variant="contained" color="default" onClick={ejecutarFunciones}  >Agregar</Button>):(<p>Producto no disponible</p>

                )}
                
                     </>
                  ):(
                    <ButtonGroup   variant="contained" color="primary"> 
                    <Button variant="contained" color="primary" ><Link to={'/cart'} className={classes.links}>Finalizar Compra</Link></Button>
   
                    <Button variant="contained"  className={classes.green}><Link to={'/'} className={classes.links}>Seguir Comprando</Link></Button>
                    </ButtonGroup>

                  )

                  }
            </div>
          
      </section>
    );
  }


export default ItemCount;
