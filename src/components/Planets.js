import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['planets', page],
    fetchPlanets
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <>
          <button
            onClick={() =>
              setPage(prevPage =>
                // if on page 1, it returns page 1
                Math.max(prevPage - 1, 1)
              )
            }
            disabled={page === 1}
          >
            Prev Page
          </button>
          <span> {page} </span>
          <button
            onClick={() =>
              setPage(prevPage =>
                // if we dont have a next page data, we stay on page else we go to next page
                !latestData || !latestData.next ? prevPage : prevPage + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next Page
          </button>
          <div>
            {resolvedData.results.map(planet => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
