import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';
import { setUserVote, setQuestion, setUsers } from './usersSlice';
import { setOptionVote, setNewQuestion, setQuestions } from './questionsSlice';

export const handleInitialData = () => {
  return(dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({users, questions}) => {
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
      dispatch(hideLoading());
    });
  };
};

export const handleUserVote = ({ userId, questionId, option }) => {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser: userId,
      qid: questionId,
      answer: option,
    })
      .then(() => {
        dispatch(setUserVote({ userId, questionId, option }));
        dispatch(setOptionVote({ userId, questionId, option }));
      })
      .catch((error) => {
        console.error('Error saving answer:', error);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
};

export const handleAddQuestion = ({ author, optionOneText, optionTwoText }) => {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    })
      .then((formattedQuestion) => {
        dispatch(setNewQuestion(formattedQuestion));
        dispatch(setQuestion(formattedQuestion));
      })
      .catch((error) => {
        console.error("Error adding question: ", error);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
};
