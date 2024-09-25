import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from '../store/authedUserSlice';

const LogIn = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(setAuthedUser(event.target.value))

  }
  return (
    <div>
      <div>LogIn</div>
      <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Select a user...
        </option>
        {Object.values(users).map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LogIn;