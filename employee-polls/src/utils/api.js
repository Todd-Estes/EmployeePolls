import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA';

export function getUsers() {
  return _getUsers().then((users) => ({
    users,
  }));
}
