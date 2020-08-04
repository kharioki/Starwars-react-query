import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, greeting, page) => {
  console.log(greeting);
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(
    ['planets', 'Hey, Mr Stark', page],
    fetchPlanets,
    {
      // defualt staletime is 0
      staleTime: 2000,
      // you can use callback functions
      onSuccess: () => console.log('data fetched')
    }
  );

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(prevPage => prevPage - 1)}>
        Prev Page
      </button>
      <span> {page} </span>
      <button onClick={() => setPage(prevPage => prevPage + 1)}>
        Next Page
      </button>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map(planet => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
