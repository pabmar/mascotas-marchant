import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
 

const CardWidget = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
    )
}

export default CardWidget;



 


