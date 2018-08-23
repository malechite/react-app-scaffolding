import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import DefaultLayout from 'shared/layout/DefaultLayout';
import Login from 'containers/Login/Login';
import LargeSpinner from 'shared/loading/LargeSpinner';

const Users = Loadable({
  loader: () => import('containers/Users/Users'),
  loading: LargeSpinner
});

const Dashboard = Loadable({
  loader: () => import('containers/Dashboard/Dashboard'),
  loading: LargeSpinner
});


class Routes extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };
  render() {
    const { isAuthenticated } = this.props;

    const loggedInView = () => (
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/users" component={Users} />
          <Redirect from="*" to="/" />
        </Switch>
      </DefaultLayout>
    );

    const loggedOutView = () => (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect from="*" to="/login" />
      </Switch>
    );

    return (
      <Router>
        <Route>
          {!isAuthenticated ? loggedInView : loggedOutView}
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated }}) => {
  return {
    isAuthenticated
  };
};

export default connect(mapStateToProps)(Routes);
