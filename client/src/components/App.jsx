import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) =>
  <div>
    <h1>Login</h1>
    <button onClick={props.getMessage}>Button</button>
    <Link to="/about">About</Link>
  </div>

export default App;
