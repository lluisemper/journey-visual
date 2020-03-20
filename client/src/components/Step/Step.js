import React, { useState } from 'react';
import './Step.css';

const Step = ({ step, addStep }) => {

  const [initialState, setinitialState] = useState({
    title: '',
    comments: '',
    emotion: '',
    score: ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
    addStep(step._id, initialState)
  }

  return (
    <div className='Step'>
      {step.title ? <div className="step-active">
        <h1>{step.title}</h1>
        <h1>{step.comments}</h1>
        <h1>{step.emotion}</h1>
        <h1>{step.score}</h1>
      </div> :
        <form className="stepForm" onSubmit={submitHandler}>
          <div className="wrapper">
            <h4>Title:</h4>
            <input type='text' onChange={(e) => setinitialState({ ...initialState, title: e.target.value })} />
          </div>
          <div className="wrapper">
            <h4>Comments</h4>
            <input type='text' onChange={(e) => setinitialState({ ...initialState, comments: e.target.value })} />
          </div>
          <div className="wrapper">
            <h4>Emotion</h4>
            <input type='text' onChange={(e) => setinitialState({ ...initialState, emotion: e.target.value })} />
          </div>
          <div className="wrapper">
            <h4>Score</h4>
            <input type='text' onChange={(e) => setinitialState({ ...initialState, score: e.target.value })} />
          </div>
          <input type='submit' />
        </form>}
    </div>
  )

}

export default Step