import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetAuthedUser } from "../store/authedUserSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);
  const loggedInUser = useSelector((state) => state.users[authedUser]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(resetAuthedUser());
    navigate("/");
  };

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
          <Link to="/" onClick={handleLogout} className="logout-link">
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
