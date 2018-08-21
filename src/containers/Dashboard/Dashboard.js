import React, { Component } from 'react';
import styles from './Dashboard.scss';
import { Card, Elevation } from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Grid fluid>
          <Row>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">React</h5>
                <p>A JavaScript library for building user interfaces.</p>
                <span className={styles.version}>v15.4.2</span>
              </Card>
            </Col>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">Redux</h5>
                <p>A predictable state container for JavaScript apps.</p>
                <span className={styles.version}>v3.6.0</span>
              </Card>
            </Col>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">Webpack</h5>
                <p>A module bundler for modern JavaScript applications.</p>
                <span className={styles.version}>v2.3.1</span>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">React Router</h5>
                <p>Declarative routing for React.</p>
                <span className={styles.version}>v4.0.0</span>
              </Card>
            </Col>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">Blueprint</h5>
                <p>A React-based UI toolkit for the web.</p>
                <span className={styles.version}>v1.14.0</span>
              </Card>
            </Col>
            <Col xs={12} md={4} className={styles.col}>
              <Card elevation={Elevation.ONE}>
                <h5 className="bp3-heading">Yarn</h5>
                <p>Fast, reliable, and secure dependency management.</p>
                <span className={styles.version}>v0.23.0</span>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
