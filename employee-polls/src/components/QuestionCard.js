import React from 'react'

const QuestionCard = (props) => {
  const { questions, cardTitle } = props;
  return (
    <div>
      <div>{cardTitle}</div>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>Question id: {q.id}, Author: {q.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;