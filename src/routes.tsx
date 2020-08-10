import React from 'react';
import { BrowserRouter, Route, Switch,  } from "react-router-dom";

/* Pages */
import PageSideBar from './components/PageSideBar';
import Dashboard from './pages/dashboard';
import Stores from './pages/stores';
import Sales from './pages/sales';
import Clients from './pages/clients';
import Products from './pages/products';
import Plans from './pages/plans';
import Config from './pages/config';
import Login from './pages/login';
import Profile from './pages/profile';

export default function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={() => PageSideBar} />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/lojas" component={() => Stores} />
                <Route exact path="/vendas" component={() => Sales} />
                <Route exact path="/clientes" component={() => Clients} />
                <Route exact path="/produtos" component={() => Products} />
                <Route exact path="/planosemetas" component={() => Plans} />
                <Route exact path="/configuracoes" component={() => Config} />
                <Route exact path="/login" component={() => Login} />
                <Route exact path="/perfil" component={() => Profile} />
                
                {/* 404 */}
                <Route path="*" component={() => <h1>Página não encontrada</h1>} />
            </Switch>
        </BrowserRouter>
    );
}