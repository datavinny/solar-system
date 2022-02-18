import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetas = planets.map(({ name, image }) => (
      <PlanetCard planetName={ name } planetImage={ image } key={ name } />
    ));

    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        { planetas }
      </>
    );
  }
}

export default SolarSystem;
