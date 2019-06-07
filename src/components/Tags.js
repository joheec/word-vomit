import React, { Fragment } from 'react';

function Tag({ hash }) {
  return (
    <span className="tag">#{hash} </span>
  );
}

function Tags({ tags }) {
  return (
    <Fragment>
      { tags.map(tag => <Tag key={tag} hash={tag} />) }
    </Fragment>
  );
}

export default Tags;
