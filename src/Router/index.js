import React from 'react';
import {Switch, Route} from 'react-router';
import TodosComponentes from '../Components/Todos';
import Login from '../Components/Login';
import ForgotPassword from '../Components/ForgotPassword';
import Home from '../Components/Home';

export default props =>
    <Switch>
        <Route exact path='/' render={ () => { return (<div>Hello World</div>)}} />
        <Route path='/login' component={Login}/>
        <Route path='/esqueci-minha-senha' component={ForgotPassword}/>
        <Route path='/home' component={Home}/>
        <Route path='/todos' component={TodosComponentes} />
    </Switch>