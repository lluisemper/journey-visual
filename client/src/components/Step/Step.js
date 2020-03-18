import React from 'react';
import './Step.css';
import ApiClient from '../../ApiClient';


const Step = ({ step }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    step.title = e.target.title.value;
    step.emotion = e.target.emotion.value;
    step.score = e.target.score.value;
<<<<<<< HEAD

=======
>>>>>>> 7671660dbe0b8e1e18c92ee13697350418ec2842
    ApiClient.updateStep(step._id, step);
  }

  const form = () => {
    return (
      <form className="stepForm" onSubmit={submitHandler}>
        <h4>Title:</h4>
        <input type='text' name='title' />
        <h4>Emotion</h4>
        <input type='text' name='emotion'/>
        <h4>Score</h4>
        <input type='text' name='score'/>
        <input type='submit'/>
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