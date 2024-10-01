import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Error from './Error';
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
  const answered = useSelector((state) => state.users[authedUser].answers[questionId]);
  const authorUser = useSelector((state) => state.users[question.author])

  console.log(answered)
  const handleVote = (option) => {
    dispatch(setUserVote({
      userId: loggedInUser.id,
      questionId: question.id,
      option
    }))
  }

  // useEffect(() => {
  //   userAnswers = Object.keys(loggedInUser.answers)
  // })

  return (
    <div>
      <div>Poll by {question.author}</div>
      <div>
        <img
          src={authorUser.avatarURL}
          alt={`Avatar of ${question.author}`}
          style={{
            width: 192,
            height: 290,
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div>
        <h1>Would You Rather</h1>
        <p>{question.optionOne.text}</p>
        <button onClick={() => handleVote("optionOne")}>Vote</button>
        <p>{question.optionTwo.text}</p>
        <button onClick={() => handleVote("optionTwo")}>Vote</button>
        {answered && (
          <p>
            You voted on <b>{question[answered].text}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default Question;