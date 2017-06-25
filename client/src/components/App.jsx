import React from 'react';

const App = (props) =>
  <div>
    <h1>{props.title ? props.title.message: null}</h1>
    <button onClick={props.getMessage}>Button</button>
  </div>

export default App;
