import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import NavBar from '../NavBar/NavBar';
import Box from '@material-ui/core/Box'; 

const Router = () =>{


    return <BrowserRouter>
    <NavBar/>
    <Box mt={2}>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route path="/category/:id">
                <ItemListContainer/>
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
                 
            </Route>
        </Switch>
    </Box>
    
    </BrowserRouter>
}

export default Router