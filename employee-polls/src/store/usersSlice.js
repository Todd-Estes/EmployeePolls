import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../utils/api";



const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    }
  }
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  const { users } = await getUsers();
  dispatch(setUsers(users));
};

export default usersSlice.reducer;

// Selector
// export const selectAllUsers = (state) => Object.values(state.users);
// export const selectUserById = (state, userId) => state.users[userId];