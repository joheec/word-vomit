import React, { Fragment } from 'react';
import posts from './posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Word Vomit</header>
      <div className="App-content">
        <Fragment>
          { posts }
        </Fragment>
      </div>
    </div>
  );
}

export default App;
