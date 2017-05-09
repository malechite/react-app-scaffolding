import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
    createColumns() {
        return this.props.columns.map(function(item, index) {
            return <th key={'column' + index}>{item}</th>;
        });
    }

    createRows() {
        return this.props.rows.map((item, index) => {
            return (
                <tr key={'row' + index}>
                    {this.createCells(item)}
                </tr>
            );
        });
    }

    createCells(row) {
        return row.map(function(cell, index) {
            return <td key={'cell' + index}>{cell}</td>;
        });
    }

    render() {
        return (
            <table className='pt-table pt-interactive'>
                <thead>
                    <tr>
                        {this.createColumns()}
                    </tr>
                </thead>
                <tbody>
                    {this.createRows()}
                </tbody>
            </table>
        );
    }
}


Table.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.any
};
