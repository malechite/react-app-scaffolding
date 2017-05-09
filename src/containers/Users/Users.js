import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'shared/components/Table';
import LargeSpinner from 'shared/loading/LargeSpinner';
import { getUsers } from 'redux/modules/users';

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    generateRows() {
        const users = this.props.list;
        let list = [];
        for (var i = 0; i < users.length; i++) {
            let user = users[i];
            list.push([i, user.name.first, user.name.last, user.location.city]);
        }
        return list;
    }

    render() {
        if (this.props.loading) {
            return <LargeSpinner />;
        } else {
            return <Table columns={['ID', 'First Name', 'Last Name', 'City']} rows={this.generateRows()} />;
        }
    }
}

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
    list: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {

    const { users } = state;
    const { list, loading } = users;

    return {
        list,
        loading
    };
}

export default connect(mapStateToProps, {getUsers})(Users);
