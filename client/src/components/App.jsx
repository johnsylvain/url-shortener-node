import React from 'react';

const App = (props) =>
  <div>
    <h1>{props.title}</h1>
    <button onClick={props.getMessage}></button>
  </div>

export default App;
