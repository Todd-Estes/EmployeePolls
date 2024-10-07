import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionsContainer';

const Home = () => {
  const authedUser = useSelector(state => state.authedUser);
  const loggedInUser = useSelector(state => state.users[authedUser]);
  const questions = useSelector(state => state.questions);

  const answeredQuestionIds = Object.keys(loggedInUser.answers);

  const questionsByType = () => {
    return Object.values(questions).reduce(
      ([answered, unanswered], question) => {
        (answeredQuestionIds.includes(question.id) ? answered : unanswered).push(
          question
        );
        return [answered, unanswered];
      },
      [[], []]
    );
  };

  const [answeredQuestions, newQuestions] = questionsByType();

  return (
    <div className="container">
      <div className="content">
        <h1>Home</h1>
        <QuestionCard questions={answeredQuestions} cardTitle={'Answered Questions'}/>
        <QuestionCard questions={newQuestions} cardTitle={'New Questions'}/>
      </div>
    </div>
  );
};

export default Home;
