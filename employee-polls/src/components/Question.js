import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from './Error';
import VoteOption from './VoteOption';

const Question = () => {
  const { questionId } = useParams();
  const question = useSelector((state) => state.questions[questionId]);
  const authedUser = useSelector((state) => state.authedUser);
  const answered = useSelector(
    (state) => state.users[authedUser].answers[questionId]
  );
  const authorUser = useSelector((state) => state.users[question?.author]);

  if (!question) {
    return <Error />;
  }

  return (
    <div className="question-page">
      <div className="question-header">
        <h2>Poll by {question.author}</h2>
        <img
          src={authorUser.avatarURL}
          alt={`Avatar of ${question.author}`}
          className="author-avatar"
        />
      </div>
      <h1>Would You Rather</h1>
      <div className="vote-options">
        <VoteOption
          questionId={questionId}
          option="optionOne"
          answered={answered}
        />
        <VoteOption
          questionId={questionId}
          option="optionTwo"
          answered={answered}
        />
      </div>
      {answered && (
        <p className="user-vote">
          You voted on <b>{question[answered].text}</b>
        </p>
      )}
    </div>
  );
};

export default Question;
