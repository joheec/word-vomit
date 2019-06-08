import React from 'react';
import './styles.css';

function Entry({ children }) {
  return (
    <div className="entry-container">{ children }</div>
  );
}

export default Entry;
