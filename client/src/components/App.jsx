import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../utils/require-auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(isAuthenticated()) {
      this.props.autoLogin();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      username: e.target.username.value,
      password: e.target.password.value
    })
  }

  render() {
    return (
      <div className="LoginForm">
          <h1>Admin Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
            />
            <button
              type="submit">Login</button>
          </form>
      </div>
    )
  }
}

export default App;
