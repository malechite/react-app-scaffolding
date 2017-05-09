import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'redux/modules/auth';
import { Menu, MenuItem, MenuDivider, Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';

class Header extends Component {

    render() {
        let settingsMenu = (
            <Menu>
                <MenuItem text='Settings...' iconName='cog' />
                <MenuDivider />
                <MenuItem onClick={this.props.logoutUser} text='Log Out' iconName='logout' />
            </Menu>
        );

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
                    <Popover
                        content={settingsMenu}
                        interactionKind={PopoverInteractionKind.CLICK}
                        position={Position.BOTTOM_RIGHT}
                        useSmartArrowPositioning
                        inheritDarkTheme={false}
                    >
                        <button className='pt-button pt-minimal pt-icon-cog' />
                    </Popover>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    logoutUser: PropTypes.func.isRequired
};

export default connect(null, {logoutUser})(Header);
