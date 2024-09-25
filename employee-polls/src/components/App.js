import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { fetchUsers } from "../store/usersSlice";
import LogIn from "./LogIn";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const authedUser = useSelector(state => state.authedUser);
  const loading = users === null;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return (<p>LOADING</p>)
  }

  return (
    <div>
      {authedUser ? (
        <p>You finally made it</p>
      ) : (
        <LogIn />
      )}
    </div>
  );
};

export default App;
