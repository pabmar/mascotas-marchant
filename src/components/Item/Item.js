import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Item =  props => {

    const { item } = props;
    const classes = useStyles();
    
    return ( 
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.alt}
              height="140"
              image={item.img}
              title={item.titulo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.titulo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                 {item.resumen}
              </Typography>
              <Typography variant="body3" color="textSecondary" component="p">
                 ${item.precio}.-
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
          <ItemCount></ItemCount>
          <Button variant="contained" color="default">
            Agregar
          </Button>
 
 
          </CardActions>
          <CardActions>
       
            <Button size="small" color="primary">
              Mas Informacion
            </Button>
 
          </CardActions>
        </Card>
      );
        // return (
        // <Card className={classes.root}>
        //     <CardContent>
        //     <Typography className={classes.title} color="textSecondary" gutterBottom>
                
        //     </Typography>
        //     <Typography variant="h5" component="h2">
        //         <img src={imagen}>
        //     </Typography>
        //     <Typography className={classes.pos} color="textSecondary">
        //         adjective
        //     </Typography>
        //     <Typography variant="body2" component="p">
        //     <p> </p>
        //         <br />
        //         {precio}
        //     </Typography>
        //     </CardContent>
        //     <CardActions>
        //     <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
  
    
    
}


export default Item