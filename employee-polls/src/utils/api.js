const {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} = require('./_DATA');

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
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
