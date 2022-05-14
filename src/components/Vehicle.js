import React from 'react';

const Vehicle = ({ vehicle }) => {
  return (
    <div className="card">
      <h3>{vehicle.name}</h3>
      <p>Model - {vehicle.model}</p>
      <p>Manufacturer - {vehicle.manufacturer}</p>
      <p>Max Speed - {vehicle.max_atmosphering_speed}</p>
      <p>Crew - {vehicle.crew}</p>
      <p>Passengers - {vehicle.passengers}</p>
      <p>Cargo Capacity - {vehicle.cargo_capacity}</p>
    </div>
  );
};

export default Vehicle;