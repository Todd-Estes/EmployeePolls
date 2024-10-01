import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from './Error';

const Question = () => {
  const { questionId } = useParams();
  const question = useSelector((state) => state.questions[questionId]);

  if (!question) {
    return <Error />;
  }

  const authedUser = useSelector((state) => state.authedUser);
  const loggedInUser = useSelector((state) => state.users[authedUser]);
  const [answered, setAnswered] = useState(loggedInUser.answers[questionId]);
  const authorUser = useSelector((state) => state.users[question.author])

  // useEffect(() => {
  //   userAnswers = Object.keys(loggedInUser.answers)
  // })
  console.log(question.avatarURL);
  return (
    <div>
      <div>QuestionShow id: {questionId}</div>
      <div>Question Author: {question.author}</div>
      <div>Question Answered?: {answered}</div>
      <div>
        <img
          src={authorUser.avatarURL}
          alt={`Avatar of ${question.author}`}
          style={{
            width: 128,
            height: 193,
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default Question;