import React, { Component } from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styles from './loading.scss';

export default class LargeSpinner extends Component {
    render() {
        return (
            <div className={styles.spinner}>
                <Spinner className='pt-large' intent={Intent.PRIMARY} />
            </div>
        );
    }
}
