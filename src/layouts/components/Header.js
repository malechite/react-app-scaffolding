import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        let title = this.props.title || 'Header';

        return (
            <div>
                {title}
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
