import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Error from './Error';
import VoteOption from './VoteOption';
import { setUserVote } from '../store/usersSlice';

const Question = () => {
  const { questionId } = useParams();
  const question = useSelector((state) => state.questions[questionId]);

  if (!question) {
    return <Error />;
  }

  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const loggedInUser = useSelector((state) => state.users[authedUser]);
  const answered = useSelector(
    (state) => state.users[authedUser].answers[questionId]
  );
  const authorUser = useSelector((state) => state.users[question.author]);

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
}

export default Question;