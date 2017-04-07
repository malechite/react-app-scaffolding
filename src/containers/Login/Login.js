import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Intent } from '@blueprintjs/core';
import { loginUser } from 'redux/modules/auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUpdate(e) {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({[name]: val});
    }

    loginOnEnter(e) {
        if (e.key === 'Enter') {
            this.logIn();
        }
    }

    handleLogin(e) {
        e.preventDefault();
        this.logIn();
    }

    logIn() {
        if (this.state.username && this.state.password) {
            this.props.loginUser({
                username: this.state.username,
                password: this.state.password
            });
        }
    }

    render() {
        return (
            <div className='login'>
                Username: <input type='text' name='username' onChange={this.handleUpdate.bind(this)} />
                Password: <input type='password' name='password' onChange={this.handleUpdate.bind(this)} onKeyPress={this.loginOnEnter.bind(this)} />
                <Button iconName='user' intent={Intent.PRIMARY} onClick={this.handleLogin.bind(this)}>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
};

export default connect(null, {loginUser})(Login);
