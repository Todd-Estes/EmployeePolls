import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import "../App.css";
import { handleInitialData } from "../store/combinedActions";
import NavBar from "./NavBar";
import Home from "./Home";
import LogIn from "./LogIn";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Error from "./Error";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <LoadingBar />
      {(!authedUser && !users) ? null : (
        <>
          {(!authedUser && users) ? (
            <LogIn />
          ) : (
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/add" element={<NewQuestion />} />
                <Route path="/questions/:questionId" element={<Question />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
