import React from 'react';
import {Switch, Route} from 'react-router';
import TodosComponentes from '../Components/Todos/index';

export default props =>
    <Switch>
        <Route exact path='/' render={ () => { return (<div>Hello World</div>)}} />
        <Route path='/todos' component={TodosComponentes} />
    </Switch>