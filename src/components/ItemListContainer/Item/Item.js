import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { ItemStyle } from './ItemStyle';

const useStyles = makeStyles((theme) => ItemStyle(theme));

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
              image={item.img1}
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
          
 
 
          </CardActions>
          <CardActions>
       
            <Link to={'/item/'+item.id} >Mas Informacion</Link>
 
          </CardActions>
        </Card>
      );
         
    
    
}


export default Item