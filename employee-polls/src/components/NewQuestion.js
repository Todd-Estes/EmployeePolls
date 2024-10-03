import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setNewQuestion } from '../store/questionsSlice';
import { generateCustomId } from '../utils/helpers';
import { setQuestion } from '../store/usersSlice';
import { handleAddQuestion } from '../store/combinedActions';

const NewQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);
  // TODO see about removing loggedInUser
  const loggedInUser = useSelector((state) => state.users[authedUser]);
  const questions = useSelector((state) => state.questions);

  const [optionOneInput, setOptionOneInput] = useState('');
  const [optionTwoInput, setOptionTwoInput] = useState('');

  const updateOptionOneInput = (value) => {
    setOptionOneInput(value);
  }

  const updateOptionTwoInput = (value) => {
    setOptionTwoInput(value);
  }

  const inputsMissing = !optionOneInput || !optionTwoInput;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      handleAddQuestion({
        questionId: generateCustomId(),
        userId: authedUser,
        optionOne: optionOneInput,
        optionTwo: optionTwoInput,
      })
    );
    navigate("/")
  }


  return (
    <div>
      <h1>Would You Rather</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Option One"
          value={optionOneInput}
          onChange={(event) => updateOptionOneInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Option Two"
          value={optionTwoInput}
          onChange={(event) => updateOptionTwoInput(event.target.value)}
        />
        <button disabled={inputsMissing} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewQuestion;