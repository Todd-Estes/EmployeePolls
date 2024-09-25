import { createSlice } from "@reduxjs/toolkit";

const authedUserSlice = createSlice({
  name: 'authedUser',
  initialState: null,
  reducers: {
    setAuthedUser: (state, action) => {
      console.log(action.payload)
      return action.payload;
    }
  }
});

export const { setAuthedUser } = authedUserSlice.actions;

export default authedUserSlice.reducer;