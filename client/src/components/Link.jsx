import React from 'react';

const Link = (props) =>
  <div className="Link">
    <h3>{props.description}</h3>
    <p>{`${location.host}/${props.code}`}</p>
  </div>

export default Link;
