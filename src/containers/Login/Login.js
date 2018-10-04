import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Intent, InputGroup, Spinner } from '@blueprintjs/core'
import { loginUser } from 'redux/modules/auth'
import styles from './Login.scss'

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  state = {
    username: '',
    password: '',
  }

  handleUpdate(e) {
    let name = e.target.name
    let val = e.target.value
    this.setState({ [name]: val })
  }

  loginOnEnter(e) {
    if (e.key === 'Enter') {
      this.logIn()
    }
  }

  handleLogin(e) {
    e.preventDefault()
    this.logIn()
  }

  logIn() {
    const { username, password } = this.state
    const { loginUser } = this.props

    username && password
      ? loginUser({
          username,
          password,
        })
      : null
  }

  render() {
    const { username, password } = this.state
    const { loading } = this.props
    return (
      <div className={styles.login}>
        <InputGroup
          className={styles.input}
          type="text"
          name="username"
          placeholder="Your email address..."
          leftIcon="user"
          onChange={this.handleUpdate.bind(this)}
        />
        <InputGroup
          className={styles.input}
          type="password"
          name="password"
          placeholder="Enter your password..."
          leftIcon="lock"
          onChange={this.handleUpdate.bind(this)}
          onKeyPress={this.loginOnEnter.bind(this)}
        />
        {loading && <Spinner className="pt-small" />}
        <Button
          iconName="log-in"
          intent={Intent.PRIMARY}
          disabled={!(username && password) || loading}
          id="loginButton"
          onClick={this.handleLogin.bind(this)}
        >
          Login
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { loading } }) => {
  return {
    loading,
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
