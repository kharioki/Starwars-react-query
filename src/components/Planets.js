import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, greeting) => {
  console.log(greeting);
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery(
    ['planets', 'Hey, Mr Stark'],
    fetchPlanets,
    {
      // defualt staletime is 0
      staleTime: 2000,
      onSuccess: () => console.log('data fetched')
    }
  );

  return (
    <div>
      <h2>Planets</h2>

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
