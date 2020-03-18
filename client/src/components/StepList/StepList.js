import React, { useState, useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import StepClass from '../../StepClass';
import ApiClient from '../../ApiClient';

const StepList = ({ currentJourney }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (currentJourney) {
      ApiClient.getSteps(currentJourney._id).then(steps => {
        setSteps(steps);
      })
    }
  }, [currentJourney])

  console.log('steps',steps);
  

  const createStep = () => {
    const newStep = new StepClass();
    ApiClient.postStep(currentJourney._id, newStep);
    setSteps([...steps, newStep]);
  }

  return (
    <div className='StepList'>
      {steps !== undefined && steps.length && steps.map((step) => {
        return (
          <div key={step._id} className='stepContainer'>
            <button className='addStep' onClick={() => {
              createStep()
            }
            }>+</button>
            <Step step={step} currentJourney={currentJourney} />
            <button className='addStep' onClick={() => {
              createStep()
            }
            }>+</button>
          </div>
        )
      })}
      <button onClick={() => {
        createStep()
      }
      }>add Step</button>
    </div>
  )
}

export default StepList


