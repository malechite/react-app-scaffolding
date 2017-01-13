import React, { Component, PropTypes } from 'react';
import { Layout} from 'antd';

const { Content } = Layout;
import Header from './components/Header';
import Footer from './components/Footer';

export default class DefaultLayout extends Component {
    render() {
        return (
            <Layout className='layout'>
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </Layout>
        );
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.any
};
