import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import authedUserReducer from './authedUserSlice';
import questionsReducer from  './questionsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
  }
});
