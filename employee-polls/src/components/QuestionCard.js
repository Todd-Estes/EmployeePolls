import React from 'react'
import { formatDate } from "../utils/helpers";
import { Link } from 'react-router-dom';

const QuestionCard = (props) => {
  const { question} = props;
  return (
    <li>
      Question id: {question.id}, Author: {question.author}, Timestamp:{" "}
      {formatDate(question.timestamp)}
      <br />
      <span>
        <Link to={`/questions/${question.id}`}>Show</Link>
      </span>
    </li>
  );
}

export default QuestionCard;