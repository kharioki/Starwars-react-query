import React from 'react';

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model - {starship.model}</p>
      <p>Manufacturer - {starship.manufacturer}</p>
      <p>Max Speed - {starship.max_atmosphering_speed}</p>
      <p>Crew - {starship.crew}</p>
      <p>Passengers - {starship.passengers}</p>
      <p>Cargo Capacity - {starship.cargo_capacity}</p>
    </div>
  );
};

export default Starship;