const {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} = require("./_DATA");

export function getUsers() {
  return _getUsers().then((users) => ({
    users,
  }));
}

export function getQuestions() {
  return _getQuestions().then((questions) => ({
    questions,
  }));
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer }).then(
    (success) => success
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question).then((formattedQuestion) => ({
    formattedQuestion,
  }));
}

// module.exports = {
//   getUsers,
//   getQuestions,
//   saveQuestionAnswer,
//   saveQuestion,
// };
