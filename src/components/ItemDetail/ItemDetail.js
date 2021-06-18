import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
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
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const ItemDetail =  props => {

  const { item } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
    return ( 
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Producto" className={classes.avatar}>
              P
            </Avatar>
          }
          title={(item.titulo+' $'+item.precio)}
        />
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.titulo}
        />
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
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {item.infoAdicional}
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
      



        // <Card className={classes.root}>
        //   <CardActionArea>
        //     <CardMedia
              
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="h2">
        //         {item.titulo}
        //       </Typography>
        //       <Typography variant="body2" color="textSecondary" component="p">
        //          {item.resumen}
        //       </Typography>
        //       <Typography variant="body3" color="textSecondary" component="p">
        //          ${item.precio}.-
        //       </Typography>
              
        //     </CardContent>
        //   </CardActionArea>
        //   <CardActions>
        //   <ItemCount></ItemCount>
        //   <Button variant="contained" color="default">
        //     Agregar
        //   </Button>
 
 
        //   </CardActions>
        //   <CardActions>
       
        //     <Button size="small" color="primary">
        //       Mas Informacion
        //     </Button>
 
        //   </CardActions>
        // </Card>
      );  
}


export default ItemDetail