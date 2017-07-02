import React from 'react';

const Link = (props) =>
  <div className="Link">
    <h4>{props.description} <span>({props.url})</span></h4>
    <p>🔗 {`${location.host}/${props.code}`}</p>
    <p>💻 {props.clicks} clicks</p>
    <div className="actions">
      <button onClick={() => props.deleteHandler(props._id)}>Delete</button>
    </div>
  </div>

export default Link;
