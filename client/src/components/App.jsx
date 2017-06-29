import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({
      username: e.target.username.value,
      password: e.target.password.value
    })
  }

  return (
    <div className="LoginForm">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
          />
          <input
            type="password"
            name="password"
          />
          <button
            type="submit">Login</button>
        </form>
    </div>
  )
}

export default App;
