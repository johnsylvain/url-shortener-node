import React from 'react';

const Dashboard = (props) =>
  <div className="Dashboard">
    <h2>Dashboard</h2>
    <button onClick={props.logout}>Logout</button>
  </div>

export default Dashboard;
