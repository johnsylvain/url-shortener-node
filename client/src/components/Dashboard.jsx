import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.main.getLinks();
  }

  render() {
    console.log(this.props)
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <button onClick={this.props.actions.login.logout}>Logout</button>
        {(this.props.main.links) ?
          this.props.main.links.map(link => <p key={link.linkId}>{link.url}</p>)
        : null}
      </div>
    )
  }
}

export default Dashboard;
