import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const authedUser = useSelector(state => state.authedUser);
  const loggedInUser = useSelector(state => state.users[authedUser])

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
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
        <div>
          {loggedInUser.name}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;