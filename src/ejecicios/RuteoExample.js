import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'


export const RuteoExample = () =>{


    return <BrowserRouter>
    <Link to="/tercero">
        {/* enlaza al Path */}
    </Link>
    <Switch>
        <Route exact path="/">
            {/* colocar componente a mostrar en el "home" el exact es equivalente a === */}
        </Route>
        <Route path="/primero">
            {/* colocar componente a mostrar */}
        </Route>
        <Route path="/primero/:id">
            {/* envio variable para rutas dinamicas*/}
        </Route>
    </Switch>
    </BrowserRouter>
}