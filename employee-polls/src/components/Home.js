import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionsContainer from './QuestionsContainer';

const Home = () => {
  const [showAnswered, setShowAnswered] = useState(false);
  const authedUser = useSelector((state) => state.authedUser);
  const loggedInUser = useSelector((state) => state.users[authedUser]);
  const questions = useSelector((state) => state.questions);

  const answeredQuestionIds = Object.keys(loggedInUser.answers);

  const questionsByType = () => {
    return Object.values(questions).reduce(
      ([answered, unanswered], question) => {
        (answeredQuestionIds.includes(question.id)
          ? answered
          : unanswered
        ).push(question);
        return [answered, unanswered];
      },
      [[], []]
    );
  };

  const [answeredQuestions, newQuestions] = questionsByType();

  const toggleQuestions = () => {
    setShowAnswered(!showAnswered);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Home</h1>
        <button onClick={toggleQuestions}>
          {showAnswered ? 'Show New Questions' : 'Show Answered Questions'}
        </button>
        {showAnswered ? (
          <QuestionsContainer
            questions={answeredQuestions}
            cardTitle={'Answered Questions'}
          />
        ) : (
          <QuestionsContainer
            questions={newQuestions}
            cardTitle={'New Questions'}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
