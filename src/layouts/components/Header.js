import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {

    render() {

        let title = this.props.title || 'Header';

        return (
            <div id='header-container'>
                <h1>{title}</h1>
                <Link to='/'>Dashboard</Link>
                <Link to='/users'>Users</Link>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
