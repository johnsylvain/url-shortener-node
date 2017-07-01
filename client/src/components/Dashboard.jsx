import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.main.getLinks();
  }

  render() {
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <button onClick={this.props.login.logout}>Logout</button>
      </div>
    )
  }
}

export default Dashboard;
