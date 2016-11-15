import React, { Component, PropTypes } from 'react';

class Row extends Component {
    render() {
        return (
            <li>{this.props.item.text}</li>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired
};

export default Row;
