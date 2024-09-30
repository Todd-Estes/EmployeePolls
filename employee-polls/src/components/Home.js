import React from 'react'
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';

const Home = () => {
  const authedUser = useSelector(state => state.authedUser);
  const loggedInUser = useSelector(state => state.users[authedUser]);
  const questions = useSelector(state => state.questions);

  const answeredQuestionIds = Object.keys(loggedInUser.answers);

  const questionsByType = () => {
    let answeredQ = [];
    let newQ = [];
    Object.values(questions).map(q => {
      answeredQuestionIds.includes(q.id) ? answeredQ.push(q) : newQ.push(q);
    });
    return [answeredQ, newQ];
  };

  const [answeredQuestions, newQuestions] = questionsByType();
  console.log(answeredQuestions)

  return (
    <div className="container">
      <div className="content">
        <h1>Home</h1>
            <QuestionCard questions={answeredQuestions} cardTitle={"New Questions"}/>
            <QuestionCard questions={newQuestions} cardTitle={"Answered Questions"}/>
      </div>
    </div>
  );
}

export default Home;