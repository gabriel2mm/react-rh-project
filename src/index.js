import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/index';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store/index';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));