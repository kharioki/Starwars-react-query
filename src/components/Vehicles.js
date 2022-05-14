import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Vehicle from './Vehicle';

const fetchVehicles = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
  return res.json();
};

const Films = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['vehicles', page],
    fetchVehicles
  );

  return (
    <div>
      <h2>Vehicles</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching vehicles</div>}

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
            {resolvedData.results.map(vehicle => (
              <Vehicle key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Films;
