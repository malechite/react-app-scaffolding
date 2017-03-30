import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from 'shared/utilities/asyncComponent';

import DefaultLayout from 'shared/layout/DefaultLayout';
const Users = asyncComponent(() => System.import('containers/Users/Users').then(module => module.default));
const Dashboard = asyncComponent(() => System.import('containers/Dashboard/Dashboard').then(module => module.default));


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <DefaultLayout>
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/users' component={Users} />
                </DefaultLayout>
            </Router>
        );
    }
}
