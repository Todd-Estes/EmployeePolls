import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    setUserVote: (state, action) => {
      const { userId, questionId, option } = action.payload;
      if (!state[userId]) {
        state[userId] = { answers: {} };
      }
      state[userId].answers[questionId] = option;
    },
    setQuestion: (state, action) => {
      const { formattedQuestion } = action.payload;
      const { author, id } = formattedQuestion;
      if (!state[author]) {
        state[author] = { questions: [] };
      }
      state[author].questions.push(id);
    },
  },
});

export const { setUsers, setUserVote, setQuestion } = usersSlice.actions;

export default usersSlice.reducer;
