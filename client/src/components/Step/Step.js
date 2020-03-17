import React from 'react';
import './Step.css';


const Step = ({ step }) => {

  // updateStep



  return (
    <div className='Step'>
        <h1>{step.title}</h1>
        <h1>{step.emotion}</h1>
        <h1>{step.score}</h1>
    </div>
  )
}

export default Step