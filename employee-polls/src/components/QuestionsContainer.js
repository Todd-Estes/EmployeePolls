import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionsContainer = (props) => {
  const { questions, cardTitle } = props;

  const sortedQuestions = [...questions].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="questions-container">
      <h2 className="questions-title">{cardTitle}</h2>
      <ul className="questions-list">
        {sortedQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionsContainer;