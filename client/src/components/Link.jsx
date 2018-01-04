import React from 'react';
import { RIEInput } from 'riek';


const Link = (props) => {
  const updateItem = (item) => {
    const newLink = {
      ...props.link,
      ...item
    }
    console.log(props.link, newLink)
    props.updateHandler(newLink)
  }

  return (
    <div className="Link">
      <h4>{props.link.description} <span>({props.link.url})</span></h4>
      <p>🔗 {`${location.host}/${props.link.code}`}</p>
      <p>code: <RIEInput value={props.link.code} change={updateItem} propName='code'/></p>
      <p>💻 {props.link.clicks} clicks</p>
      <div className="actions">
        <button onClick={() => props.deleteHandler(props.link._id)}>Delete</button>
      </div>
    </div>
  )
}

export default Link;
