import React from 'react';

const Specie = ({ specie }) => {
  return (
    <div className="card">
      <h3>{specie.name}</h3>
      <p>Classification - {specie.classification}</p>
      <p>Designation - {specie.designation}</p>
      <p>Average Height - {specie.average_height}</p>
      <p>Language - {specie.language}</p>
      <p>Average Lifespan(yrs) - {specie.average_lifespan}</p>
      <p>Skin colors - {specie.skin_colors}</p>
      <p>Hair colors - {specie.hair_colors}</p>
      <p>Eye colors - {specie.eye_colors}</p>
    </div>
  );
};

export default Specie;