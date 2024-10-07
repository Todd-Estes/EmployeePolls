import { fetchUsers, setUserVote, setQuestion } from './usersSlice';
import { fetchQuestions, setOptionVote, setNewQuestion } from './questionsSlice';

export const handleInitialData = () => async (dispatch) => {
  try {
    await Promise.all([
      dispatch(fetchUsers()),
      dispatch(fetchQuestions())
    ]);
  } catch (error) {
    console.error('Error fetching initial data:', error);
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

export const handleAddQuestion =
    ({ questionId, userId, optionOne, optionTwo}) =>
      (dispatch) => {
        dispatch(
          setNewQuestion({
            questionId,
            userId,
            optionOne,
            optionTwo,
          })
        );
        dispatch(
          setQuestion({
            userId,
            questionId,
          })
        );
      };
