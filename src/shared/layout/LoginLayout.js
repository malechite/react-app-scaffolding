import React, { Component, PropTypes } from 'react';

export default class DefaultLayout extends Component {
    render() {
        return (
            <div className='login'>
                {this.props.children}
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.any
};
