import React from 'react';
import { Link } from 'react-router-dom';
function DashboardMain() {
  return (
    <div>
      <h2>Bienvenue sur votre dashboard</h2>
      <ul>
        <Link to={'/Dashboard'}>
          <li>Dashboard</li>
        </Link>
        <Link to={'/Roles'}>
          <li>Roles</li>
        </Link>
        <li>Users</li>
        <li>Article</li>
      </ul>
    </div>
  );
}

export default DashboardMain;
