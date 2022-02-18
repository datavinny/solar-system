import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missões = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ name }
      />));

    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" />
        { missões }
      </>
    );
  }
}

export default Missions;
