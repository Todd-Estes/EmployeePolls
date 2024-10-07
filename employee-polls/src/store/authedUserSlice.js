import { createSlice } from '@reduxjs/toolkit';

const authedUserSlice = createSlice({
  name: 'authedUser',
  initialState: null,
  reducers: {
    setAuthedUser: (state, action) => {
      return action.payload;
    },
    resetAuthedUser: () => null
  }
});

export const { setAuthedUser, resetAuthedUser } = authedUserSlice.actions;

export default authedUserSlice.reducer;
