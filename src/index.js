import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from './Store/index';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));