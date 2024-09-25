import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, Routes } from "react-router-dom";
import "../App.css";
import { handleInitialData } from "../store/combinedActions";
import NavBar from "./NavBar";
import Home from "./Home";
import LogIn from "./LogIn";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const authedUser = useSelector(state => state.authedUser);
  const loading = users === null;
 
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading) {
    return <p>LOADING</p>
  }

  if (!authedUser) {
    return <LogIn />
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<NewQuestion />} />
      </Routes>
    </>
  );
};

export default App;
