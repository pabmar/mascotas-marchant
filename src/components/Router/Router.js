import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cart from '../Cart/Cart';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import BuscarPedidoContainer from '../BuscarPedidosContainer/BuscarPedidoContainer'
import { CartProvider } from '../Context/CartContext';
import NavBar from '../NavBar/NavBar';
import Box from '@material-ui/core/Box'; 

const Router = () =>{


    return <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Box mt={2}>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer/>
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer/>
                </Route>
                <Route path="/cart">
                    <Cart></Cart>
                </Route>
                <Route path="/buscarPedido/:codigo">
                    <BuscarPedidoContainer></BuscarPedidoContainer>
                </Route>
                <Route path="/buscarPedido">
                    <BuscarPedidoContainer></BuscarPedidoContainer>
                </Route>
            </Switch>
        </Box>   
    </CartProvider>
    
    </BrowserRouter>
}

export default Router