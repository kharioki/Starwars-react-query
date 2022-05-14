import React from 'react';

const Film = ({ film }) => {
  return (
    <div className="card">
      <h3>{film.title}</h3>
      <p>Episode - {film.episode}</p>
      <p>Release date - {film.release_date}</p>
      <p>Director - {film.director}</p>
      <p>Producer(s) - {film.producer}</p>
    </div>
  );
};

export default Film;