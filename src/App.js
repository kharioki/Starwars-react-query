import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import Films from './components/Films';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Species from './components/Species';

//TODO: Add infinite scrolling functionalities and replace pagination on different results
//TODO: Add unit tests for paginated queries

function App() {
  const [page, setPage] = useState('planets');
  
  return (
    <>
      <div className="App">
        <h1>Star Wars Universe</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {(() => {
            switch(page) {
              case 'planets':
                return <Planets />
              case 'people':
                return <People />
              case 'films':
                return <Films />
              case 'vehicles':
                return <Vehicles />
              case 'starships':
                return <Starships />
              case 'species':
                return <Species />
              default :
                return <Planets />
            }
          }) ()}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
