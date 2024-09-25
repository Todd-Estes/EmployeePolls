import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>NavBar</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/add">New</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;