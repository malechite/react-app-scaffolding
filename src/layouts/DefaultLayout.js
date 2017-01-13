import React, { Component, PropTypes } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

export default class DefaultLayout extends Component {
    render() {
        return (
            <div id='main-container'>
                <Header />
                <div id='main-container'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.any
};
