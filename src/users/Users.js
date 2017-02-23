import React, { Component } from 'react';
import { ProgressBar } from '@blueprintjs/core';

export default class Users extends Component {
    render() {
        return (
            <div>
                <ProgressBar />
                <button type='primary'>Users</button>
            </div>
        );
    }
}
