import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer>©2018</Footer>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.any
};

export default DefaultLayout;
