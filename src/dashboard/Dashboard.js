import React, { Component } from 'react';
import styles from './Dashboard.scss';
import { Button, Intent } from '@blueprintjs/core';

export default class App extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                Dashboard
                <Button iconName='refresh' intent={Intent.PRIMARY}>Delete</Button>
            </div>
        );
    }
}
