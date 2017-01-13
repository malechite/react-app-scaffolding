import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Layout, Menu } from 'antd';

class Header extends Component {

    render() {

        let title = this.props.title || 'Header';

        return (
            <Layout.Header title={title}>
                <div className='logo' />
                <Menu
                  theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}>
                    <Menu.Item key='1'><Link to='/'>Dashboard</Link></Menu.Item>
                    <Menu.Item key='2'><Link to='/users'>Users</Link></Menu.Item>
                    <Menu.Item key='3'>nav 3</Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
