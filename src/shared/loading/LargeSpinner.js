import React, { Component } from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styled from 'styled-components';

const Placement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
`;

export default class LargeSpinner extends Component {
  render() {
    return (
      <Placement>
        <Spinner className="pt-large" intent={Intent.PRIMARY} />
      </Placement>
    );
  }
}
