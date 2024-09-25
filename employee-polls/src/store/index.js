import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice';
import authedUserReducer from './authedUserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authedUser: authedUserReducer,
  }
});
