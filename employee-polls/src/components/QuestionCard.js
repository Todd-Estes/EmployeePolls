import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';

const QuestionCard = (props) => {
  const { question} = props;
  return (
    <li className="question-card">
      <div className="question-info">
        <p>Question id: {question.id}</p>
        <p>Author: {question.author}</p>
        <p>{formatDate(question.timestamp)}</p>
      </div>
      <Link to={`/questions/${question.id}`} className="question-link">
        Show
      </Link>
    </li>
  );
};

export default QuestionCard;
