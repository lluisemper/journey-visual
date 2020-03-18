import React from 'react';
import './Step.css';
import ApiClient from '../../ApiClient';


const Step = ({ step, currentJourney }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    step.title = e.target.title.value;
    step.emotion = e.target.emotion.value;
    step.score = e.target.score.value;
  
    ApiClient.updateStep(step._id, step);
  }

  const form = () => {
    return (
      <form onSubmit={submitHandler}>
        <p>Title:</p>
        <input
          type='text'
          name='title'
        />
        <p>Emotion</p>
        <input
          type='text'
          name='emotion'
        />
        <p>Score</p>
        <input
          type='text'
          name='score'
        />
        <input
          type='submit'
        />
      </form>
    )
  }

  const renderStep = () => {
    return (
      <div>
        <h1>{step.title}</h1>
        <h1>{step.emotion}</h1>
        <h1>{step.score}</h1>
      </div>
    )
  }

  return (
    <div className='Step'>
      {step.title ? renderStep() : form()}
    </div>
  )
}

export default Step