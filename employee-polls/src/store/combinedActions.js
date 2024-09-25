import { fetchUsers } from "./usersSlice";
import { fetchQuestions } from "./questionsSlice";

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
