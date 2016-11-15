import React, { Component, PropTypes } from 'react';

class Header extends Component {

    render() {

        let title = this.props.title || '';

        return (
            <div id='header-container'>
                <h1>{title}</h1>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
