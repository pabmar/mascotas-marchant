import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel'
import { ItemDetailStyle } from './ItemDetailStyle';



const useStyles = makeStyles((theme) =>ItemDetailStyle(theme) );

const ItemDetail =  ({item,children}) => {

 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const imagenes = [item.img1,item.img2,item.img3]

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
    return ( 
        <Card className={classes.root}>{console.log(imagenes)}
        <CardHeader
          avatar={
            <Avatar aria-label="Producto" className={classes.avatar}>
              P
            </Avatar>
          }
          title={(item.titulo+' $'+item.precio)}
        />
        <Carousel>
            {
                imagenes.map( (imagen, i) => <CardMedia
                className={classes.media}
                image={imagen}
                title={item.titulo}
              />
              )
            }
        </Carousel>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          
            {item.resumen}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          {children}
          <p>Stock Disponible: {item.stock}</p>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography paragraph>
              {item.infoAdicional}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      



      
      );  
}


export default ItemDetail