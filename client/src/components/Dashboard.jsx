import React, { Component } from 'react';
import Link from './link';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.actions.main.getLinks();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.actions.main.addLink({
      url: e.target.url.value,
      description: e.target.description.value
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <button onClick={this.props.actions.login.logout}>Logout</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" placeholder="url"/>
          <input type="text" name="description" placeholder="description"/>
          <button type="submit">Add Link</button>
        </form>
        {(this.props.main.links) ?
          this.props.main.links.map(link =>
            <Link {...link} />
          ) : null}
      </div>
    )
  }
}

export default Dashboard;
