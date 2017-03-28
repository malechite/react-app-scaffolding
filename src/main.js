import 'Styles/style.scss';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from 'redux/create';
import asyncComponent from 'shared/utilities/asyncComponent';

import DefaultLayout from 'shared/layout/DefaultLayout';

const Users = asyncComponent(() => System.import('containers/Users/Users').then(module => module.default));
const Dashboard = asyncComponent(() => System.import('containers/Dashboard/Dashboard').then(module => module.default));

const store = createStore();

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
