import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import authedUserReducer from './authedUserSlice';
import questionsReducer from  './questionsSlice';
import { loadingBarReducer } from 'react-redux-loading-bar';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
  }
});
