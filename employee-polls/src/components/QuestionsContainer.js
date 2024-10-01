import React from 'react'
import Question from './QuestionCard';

const QuestionsContainer = (props) => {
  const { questions, cardTitle } = props;

  questions.sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div>
      <div>{cardTitle}</div>
      <ul>
        {questions.map((q) => (
          <Question question={q} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionsContainer;