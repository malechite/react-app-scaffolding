import './style.scss';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './ConfigureStore';
import DefaultLayout from '../layouts/DefaultLayout';
import Users from '../users/Users';
import Dashboard from '../dashboard/Dashboard';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={DefaultLayout}>
                <Route path='/' component={Dashboard} />
                <Route path='/users' component={Users} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
