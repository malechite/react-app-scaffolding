import 'Styles/style.scss';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from 'redux/create';
import DefaultLayout from 'shared/layout/DefaultLayout';
import Users from 'containers/Users/Users';
import Dashboard from 'containers/Dashboard/Dashboard';

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
