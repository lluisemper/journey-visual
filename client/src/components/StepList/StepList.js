import React, { useState, useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import StepClass from '../../StepClass';
import ApiClient from '../../ApiClient';

const StepList = ({ journey }) => {

  // const [saved, setSaved] = useState(false);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const steps = getSteps();
  })


  const getSteps = () => {
    
  }
  
  const createStep = () => {
    const newStep = new StepClass();
  }

  return (
    <div className='Step'>
      {journey.length && journey[0].steps.map((step) => {
        return <Step step={step}/>
      })}
    </div>
  )
}

export default StepList


