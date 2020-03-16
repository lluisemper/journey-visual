import React from 'react';
import './Step.css';

const Step = ({ step }) => {

  return (
    <div className='Step'>
      <button className='addStep'>+</button>
      <div className='stepContainer'>
        <h1>{step.step}</h1>
        <h1>{step.emotion}</h1>
        <h1>{step.score}</h1>
      </div>
      <button className='addStep'>+</button>
    </div>
  )
}

export default Step