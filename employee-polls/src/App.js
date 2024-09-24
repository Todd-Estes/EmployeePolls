import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchUsers } from "./store/usersSlice";

function App(props) {
  useEffect(() => {
    props.dispatch(fetchUsers())
  }, [])
  console.log(props)
  return (
    <div>
      
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  usersSlice: users,
});

export default connect(mapStateToProps)(App);
