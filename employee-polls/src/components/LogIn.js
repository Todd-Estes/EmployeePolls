import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../store/authedUserSlice';

const LogIn = (props) => {
  const { users } = props;
  console.log(users.mtsamis);

  const handleChange = (event) => {
    event.preventDefault();
    props.dispatch(setAuthedUser(event.target.value))

  }
  return (
    <div>
      <div>LogIn</div>
      <select value="" onChange={handleChange}>
        <option value="" disabled>
          Select a user...
        </option>
        <option value={users.mtsamis}>{users.mtsamis.name}</option>
        <option value={users.sarahedo}>{users.sarahedo.name}</option>
        <option value={users.tylermcginnis}>{users.tylermcginnis.name}</option>
      </select>
    </div>
  );
}

export default connect()(LogIn);