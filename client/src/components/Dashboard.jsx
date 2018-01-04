import React, { Component } from 'react';
import Link from './Link';

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
        <header>
          <h2>
            Dashboard
            <button onClick={this.props.actions.login.logout} id="logout">Logout</button>
          </h2>
        </header>

        <section>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="url" placeholder="url" required/>
            <input type="text" name="description" placeholder="description" required/>
            <button type="submit">+ Add Link</button>
          </form>
        </section>

        <section>
          <h3>Recent Links ({this.props.main.links.length}):</h3>
          {(this.props.main.links) ?
            this.props.main.links.map(link =>
              <Link 
                link={link} 
                key={link._id} 
                deleteHandler={this.props.actions.main.deleteLink}
                updateHandler={this.props.actions.main.updateLink}/>
            ) : null}
        </section>
      </div>
    )
  }
}

export default Dashboard;
