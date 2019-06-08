import React from 'react';
import './styles.css';

function Tag({ hash }) {
  return (
    <span className="tag">#{hash} </span>
  );
}

function Tags({ tags }) {
  return (
    <div className="tags-container">
      { tags.map(tag => <Tag key={tag} hash={tag} />) }
    </div>
  );
}

export default Tags;
