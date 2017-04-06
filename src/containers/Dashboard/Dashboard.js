import React, { Component } from 'react';
import styles from './Dashboard.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>React</h5>
                                <p>A JavaScript library for building user interfaces.</p>
                                <span className={styles.version}>v15.4.2</span>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>Redux</h5>
                                <p>A predictable state container for JavaScript apps.</p>
                                <span className={styles.version}>v3.6.0</span>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>Webpack</h5>
                                <p>A module bundler for modern JavaScript applications.</p>
                                <span className={styles.version}>v2.3.1</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>React Router</h5>
                                <p>Declarative routing for React.</p>
                                <span className={styles.version}>v4.0.0</span>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>Blueprint</h5>
                                <p>A React-based UI toolkit for the web.</p>
                                <span className={styles.version}>v1.14.0</span>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className={styles.col}>
                            <div className='pt-card pt-elevation-1 pt-interactive'>
                                <h5>Yarn</h5>
                                <p>Fast, reliable, and secure dependency management.</p>
                                <span className={styles.version}>v0.23.0</span>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
