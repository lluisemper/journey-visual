import React from 'react';
import './StepList.css';
import Step from '../Step/Step';

const StepList = ({journey}) => {

  return (
    <div className='Step'>
      <h1>stepList works</h1>
      {journey.map((step) => {
        return <Step step={step}/>
      })}
    </div>
  )
}

export default StepList