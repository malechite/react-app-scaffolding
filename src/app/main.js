import './style.scss';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './ConfigureStore';
import DefaultLayout from '../layouts/DefaultLayout';
import Users from '../users/Users';
import Dashboard from '../dashboard/Dashboard';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <DefaultLayout>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/users' component={Users}/>
            </DefaultLayout>
        </Router>
    </Provider>,
    document.getElementById('root')
);
