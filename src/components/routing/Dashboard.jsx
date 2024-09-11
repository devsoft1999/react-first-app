// Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="overview">Overview</Link> 
        <Link to="stats">Stats</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
