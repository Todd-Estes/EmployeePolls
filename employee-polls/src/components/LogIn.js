import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../store/authedUserSlice';
import voteImage from '../images/vote-image.png';

const LogIn = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(setAuthedUser(event.target.value));
  };

  return (
    <div className="login-container">
      <img
        src={voteImage}
        alt="Login Logo"
        className="login-logo"
      />
      <div className="login-form">
        <h2>Log In</h2>
        <select defaultValue="" onChange={handleChange}>
          <option value="" disabled>
            Select a user...
          </option>
          {Object.values(users).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LogIn;
