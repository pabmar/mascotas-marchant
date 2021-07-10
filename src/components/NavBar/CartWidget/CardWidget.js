import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
 

const CartWidget = props => {

  const [carro,setCarro] = useContext(CartContext)
  const cantidad = carro.length
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Badge badgeContent={cantidad} color="primary">
          <AddShoppingCartIcon />
        </Badge>
        </div>
    )
}

export default CartWidget;



 


