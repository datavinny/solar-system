import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" />
      </>
    );
  }
}

export default Missions;
