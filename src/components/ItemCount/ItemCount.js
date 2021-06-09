import React,{useState} from "react"
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
  }
}));


const ItemCount = props => {
    const classes = useStyles();
    const [cantidad, setCount] = useState(0);
    const aumentarCantidad = () => {
        cantidad<25?setCount(cantidad + 1):console.log(cantidad)
        
    }
    const restarCantidad = () => {
        cantidad>0?setCount(cantidad - 1):console.log(cantidad)
    }
  
    return (
      <section >
           <div className={classes.root}>

                    <ButtonGroup disableElevation variant="contained" color="primary"> 
                        <Avatar className={classes.orange}> 
                            <Button onClick={aumentarCantidad}>+</Button>
                        </Avatar>
                        <Avatar className={classes.orange2} variant="rounded">
                            <h6 className={classes.numeros}>{cantidad}</h6>
                        </Avatar>
                        <Avatar className={classes.orange}>
                            <Button onClick={restarCantidad}>-</Button>
                        </Avatar>
                        
                    </ButtonGroup>

            </div>
          
      </section>
    );
  }


export default ItemCount;
