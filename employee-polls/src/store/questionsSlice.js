import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: null,
  reducers: {
    setQuestions: (state, action) => {
      return action.payload;
    },
    setOptionVote: (state, action) => {
      const { userId, questionId, option } = action.payload;
      if (!state[questionId]) {
        state[questionId] = {};
      }
      if (!state[questionId][option]) {
        state[questionId][option] = { votes: [] };
      }
      state[questionId][option].votes.push(userId);
    },
    setNewQuestion: (state, action) => {
      const { formattedQuestion } = action.payload;
      state[formattedQuestion.id] = formattedQuestion;
    },
  },
});

export const { setQuestions, setOptionVote, setNewQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
