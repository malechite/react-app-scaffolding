import React, { Component } from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styles from './Users.scss';

export default class Users extends Component {
    render() {
        return (
            <div>
                <div className={styles.spinner}>
                    <Spinner className='pt-large' intent={Intent.PRIMARY} />
                </div>
            </div>
        );
    }
}
