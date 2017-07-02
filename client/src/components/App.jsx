import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import { isAuthenticated } from '../utils/require-auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  componentWillMount() {
    if(isAuthenticated()) {
      this.props.autoLogin();
    }
  }

  componentWillReceiveProps() {
    this.msg.error(this.props.error.message)
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
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
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
