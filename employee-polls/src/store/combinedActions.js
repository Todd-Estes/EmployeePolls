import { fetchUsers, setUserVote } from "./usersSlice";
import { fetchQuestions, setOptionVote } from "./questionsSlice";

export const handleInitialData = () => async (dispatch) => {
  try {
    await Promise.all([
      dispatch(fetchUsers()),
      dispatch(fetchQuestions())
    ]);
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
};
export const handleUserVote =
  ({ userId, questionId, option }) =>
  (dispatch) => {
    dispatch(
      setUserVote({
        userId,
        questionId,
        option,
      })
    );
    dispatch(
      setOptionVote({
        userId,
        questionId,
        option,
      })
    );
  };
