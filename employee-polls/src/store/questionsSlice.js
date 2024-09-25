import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../utils/api";

const questionsSlice = createSlice({
  name: "questions",
  initialState: null,
  reducers: {
    setQuestions: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export const fetchQuestions = () => async (dispatch) => {
  const { questions } = await getQuestions();
  dispatch(setQuestions(questions));
};

export default questionsSlice.reducer;
