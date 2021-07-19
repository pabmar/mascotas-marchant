import React from 'react'
import { CartStyle } from '../CartStyle'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
 
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => CartStyle(theme));

const CarroVacio = props =>{
    const classes = useStyles();
    return (<Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image="https://image.freepik.com/foto-gratis/disparo-enfoque-selectivo-gato-gris-cara-gato-enojado_181624-13282.jpg"
          title="Mishi Enojado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Su Carro esta vacio...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              y a al mishi no le gusta eso
          </Typography>
        </CardContent>

      <CardActions>
      <Link to={'/'} >ir ver productos</Link>    
         
      </CardActions>
    </Card>)

}

export default CarroVacio