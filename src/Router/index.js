import React from 'react';
import {Switch, Route} from 'react-router';
import ProtectedRoute from './ProtectedRoute';
/**
 * Páginas
 */
import Home from '../Components/Home';
import Login from '../Components/Login';
import ForgotPassword from '../Components/ForgotPassword';
import TodosComponentes from '../Components/Todos';

export default props =>
    <Switch>
        <Route exact path='/' render={ () => { return (<div>Hello World</div>)}} />
        <Route path='/login' component={Login}/>
        <Route path='/esqueci-minha-senha' component={ForgotPassword}/>
        <ProtectedRoute path='/home' component={Home}/>
        <Route path='/todos' component={TodosComponentes} />
    </Switch>