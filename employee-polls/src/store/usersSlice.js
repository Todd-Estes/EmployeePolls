import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../utils/api';



const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    setUserVote: (state, action) => {
      const { userId, questionId, option } = action.payload;
      state[userId] = {
        ...state[userId],
        answers: {
          ...state[userId].answers,
          [questionId]: option,
        },
      };
    },
    // TODO see about dropping spread operators...since with toolkit we're using Immer...and look up Immer for that matter
    setQuestion: (state, action) => {
      const { userId, questionId } = action.payload;
      state[userId] = {
        ...state[userId],
        questions: [...state[userId].questions, questionId],
      };
    },
  },
});

export const { setUsers, setUserVote, setQuestion } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  const { users } = await getUsers();
  dispatch(setUsers(users));
};

export default usersSlice.reducer;
