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
      const { userId, questionId, option} = action.payload;
      state[questionId] = {
        ...state[questionId],
        [option]: {
          ...state[questionId][option],
          votes: [...state[questionId][option].votes, userId]
        }
      };
    },
  },
});

export const { setQuestions, setOptionVote } = questionsSlice.actions;

export const fetchQuestions = () => async (dispatch) => {
  const { questions } = await getQuestions();
  dispatch(setQuestions(questions));
};

export default questionsSlice.reducer;
