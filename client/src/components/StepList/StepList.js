import React from 'react';
import './StepList.css';
import Step from '../Step/Step';

const StepList = ({journey}) => {

  return (
    <div className='Step'>
      {journey.length && journey[0].steps.map((step) => {
        return <Step step={step}/>
      })}
    </div>
  )
}

export default StepList


