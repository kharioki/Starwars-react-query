import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Specie from './Specie';

const fetchSpecies = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/species/?page=${page}`);
  return res.json();
};

const Films = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['species', page],
    fetchSpecies
  );

  return (
    <div>
      <h2>Species</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching species</div>}

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
            {resolvedData.results.map(specie => (
              <Specie key={specie.name} specie={specie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Films;
