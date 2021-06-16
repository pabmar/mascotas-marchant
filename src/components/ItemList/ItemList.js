import React from 'react';
import Item from '../Item/Item'

import Grid from '@material-ui/core/Grid';
 

const ItemList =  props => {

  const { listado } = props;
    

 
    return (
 
        <Grid container justify="center" spacing={5}>
        {listado.map((p,i)=><Grid item><Item item={p}></Item></Grid>)}
        </Grid>
 
    )
    
}


export default ItemList