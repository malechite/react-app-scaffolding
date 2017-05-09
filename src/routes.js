import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import asyncComponent from 'shared/utilities/asyncComponent';

import DefaultLayout from 'shared/layout/DefaultLayout';
import Login from 'containers/Login/Login';

const Users = asyncComponent(() => System.import('containers/Users/Users').then(module => module.default));
const Dashboard = asyncComponent(() => System.import('containers/Dashboard/Dashboard').then(module => module.default));


class Routes extends Component {
    render() {
        const { isAuthenticated } = this.props;

        const loggedInView = () => (
            <DefaultLayout>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/users' component={Users} />
                    <Redirect from='*' to='/' />
                </Switch>
            </DefaultLayout>
        );

        const loggedOutView = () => (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Redirect from='*' to='/login' />
            </Switch>
        );

        return (
            <Router>
                <Route>
                    {isAuthenticated ? loggedInView : loggedOutView}
                </Route>
            </Router>
        );
    }
}

Routes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {

    const { auth } = state;
    const { isAuthenticated } = auth;

    return {
        isAuthenticated
    };
}

export default connect(mapStateToProps)(Routes);
