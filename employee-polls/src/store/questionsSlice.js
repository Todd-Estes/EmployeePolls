import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../utils/api";

const questionsSlice = createSlice({
  name: "questions",
  initialState: null,
  reducers: {
    setQuestions: (state, action) => {
      return action.payload;
    },
    setOptionVote: (state, action) => {
      const { userId, questionId, option } = action.payload;
      state[questionId] = {
        ...state[questionId],
        [option]: {
          ...state[questionId][option],
          votes: [...state[questionId][option].votes, userId],
        },
      };
    },
    setNewQuestion: (state, action) => {
      const { questionId, userId, optionOne, optionTwo } = action.payload;
      state[questionId] = {
        id: questionId,
        author: userId,
        timestamp: Date.now(),
        optionOne: {
          votes: [],
          text: optionOne,
        },
        optionTwo: {
          votes: [],
          text: optionTwo,
        },
      };
    },
    resetQuestions: () => null,
  },
});

export const { setQuestions, setOptionVote, setNewQuestion, resetQuestions } = questionsSlice.actions;

export const fetchQuestions = () => async (dispatch) => {
  const { questions } = await getQuestions();
  dispatch(setQuestions(questions));
};

export default questionsSlice.reducer;
