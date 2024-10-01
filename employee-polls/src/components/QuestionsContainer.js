import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionsContainer = (props) => {
  const { questions, cardTitle } = props;

  const sortedQuestions = [...questions].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div>
      <div>{cardTitle}</div>
      <ul>
        {sortedQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionsContainer;