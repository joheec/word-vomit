import React, { Fragment } from 'react';
import posts from './posts';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">Word Vomit</header>
      <div className="App-content">
        <Fragment>
          {
            posts.map(entry => {
              const { id } = entry.props;
              return <div key={id} className="App-entry">{ entry }</div>
            })
          }
        </Fragment>
      </div>
    </div>
  );
}

export default App;
