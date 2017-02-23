import React, { Component } from 'react';
import styles from './Dashboard.scss';
import { Button, Intent } from '@blueprintjs/core';

export default class App extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                Dashboard - Hello World!
                <Button iconName='refresh' intent={Intent.WARNING}>Delete</Button>
            </div>
        );
    }
}
