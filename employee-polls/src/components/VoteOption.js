import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleUserVote } from '../store/combinedActions';
import { getPercentOfVote } from '../utils/helpers';

const VoteOption = (props) => {
  const { questionId, option, answered } = props;
  const question = useSelector((state) => state.questions[questionId]);

  const questionOption = question[option];
  const percentOfVote = getPercentOfVote(question, questionOption);

  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const loggedInUser = useSelector((state) => state.users[authedUser]);


  const handleVote = (option) => {
    dispatch(
      handleUserVote({
        userId: loggedInUser.id,
        questionId: question.id,
        option,
      })
    );
  };
  return (
    <div>
      <p>{questionOption.text}</p>
      {answered ? (
        <div>
          <p>
            There&apos;s {questionOption.votes.length} total vote(s) for this
            option
          </p>
          <p>{percentOfVote}% of people voted for this option</p>
        </div>
      ) : (
        <button onClick={() => handleVote(option)}>Vote</button>
      )}
    </div>
  );
};

export default VoteOption;
