import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class DefaultLayout extends Component {
    render() {
        return (
            <div className='layout'>
                <Header />
                <div>
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
