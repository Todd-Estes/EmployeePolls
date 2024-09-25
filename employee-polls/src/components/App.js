import { useEffect } from "react";
import { connect } from "react-redux";
import "../App.css";
import { fetchUsers } from "../store/usersSlice";
import LogIn from "./LogIn";
import authedUserSlice from "../store/authedUserSlice";

function App(props) {
  useEffect(() => {
    props.dispatch(fetchUsers());
  }, []);
  console.log(props);

  const {
    users,
    authedUser,
  } = props;

  if (props.loading) {
    return (<p>LOADING</p>)
  }

  return (
    <div>
      {authedUser ? (
        <p>You finally made it</p>
      ) : (
        <LogIn users={users} />
      )}
    </div>
  );
  }

const mapStateToProps = ({ users, authedUser }) => ({
  loading: users === null,
  authedUser,
  users,
});

export default connect(mapStateToProps)(App);
