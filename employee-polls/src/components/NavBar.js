import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { handleResetAllState } from '../store/combinedActions';
import { resetAuthedUser } from '../store/authedUserSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector(state => state.authedUser);
  const loggedInUser = useSelector(state => state.users[authedUser])

  const logout = () => {
    dispatch(resetAuthedUser());
    navigate("/")
  }

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
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;