import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'shared/utilities/asyncComponent';

import LoginLayout from 'shared/layout/LoginLayout';
import DefaultLayout from 'shared/layout/DefaultLayout';
import Login from 'containers/Login/Login';

const Users = asyncComponent(() => System.import('containers/Users/Users').then(module => module.default));
const Dashboard = asyncComponent(() => System.import('containers/Dashboard/Dashboard').then(module => module.default));


class Routes extends Component {

    authenticatedRoutes() {
        if (this.props.isAuthenticated) {
            return (
                <DefaultLayout>
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/users' component={Users} />
                </DefaultLayout>
            );
        } else {
            return (
                <LoginLayout>
                    <Route exact path='/login' render={() => <Login />}/>
                    <Route path='*'>
                        <Redirect to='/login' />
                    </Route>
                </LoginLayout>
            );
        }
    }

    render() {
        return (
            <Router>
                <Route path='/' render={this.authenticatedRoutes.bind(this)}/>
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
