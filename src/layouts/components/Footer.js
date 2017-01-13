import React, { Component } from 'react';
import { Layout } from 'antd';

class Footer extends Component {
    render() {
        return (
            <Layout.Footer style={{ textAlign: 'center' }}>
                ©2017
            </Layout.Footer>
        );
    }
}

export default Footer;
