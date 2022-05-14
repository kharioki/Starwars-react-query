import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Film from './Film';

const fetchFilms = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/films/?page=${page}`);
  return res.json();
};

const Films = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['films', page],
    fetchFilms
  );

  return (
    <div>
      <h2>Films</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching films</div>}

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
            {resolvedData.results.map(film => (
              <Film key={film.title} film={film} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Films;
