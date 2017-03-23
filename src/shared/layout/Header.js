import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        let title = this.props.title || 'React Application';

        return (
            <nav className=' pt-navbar pt-dark'>
                <div className='pt-navbar-group pt-align-left'>
                    <div className='pt-navbar-heading'>{title}</div>
                </div>
                <div className='pt-navbar-group pt-align-right'>
                    <Link to='/' className='pt-button pt-minimal pt-icon-dashboard'>Dashboard</Link>
                    <Link to='/users' className='pt-button pt-minimal pt-icon-user'>Users</Link>
                    <span className='pt-navbar-divider' />
                    <button className='pt-button pt-minimal pt-icon-notifications' />
                    <button className='pt-button pt-minimal pt-icon-cog' />
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
