import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const authedUser = useSelector(state => state.authedUser);
  const loggedInUser = useSelector(state => state.users[authedUser])
  // TODO : flex links into single line, move username and avatar to right, implement logout
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/add">New</Link>
          </li>
        </ul>
        <div className="user-info">
          <img
            src={loggedInUser.avatarURL}
            alt={`Avatar of ${loggedInUser.name}`}
            className="user-avatar"
          />
          <span className="username">{loggedInUser.name}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;