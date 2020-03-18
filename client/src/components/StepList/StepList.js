import React, { useState, useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import StepClass from '../../StepClass';
import ApiClient from '../../ApiClient';

// const getOrderSteps = (steps) => {
//   let current = steps.find((step) => step.prev === null);
//   let arr = [];

//   while (current) {
//     arr.push(current);
//     current = current.next;
//   }
//   return arr;
// }

const StepList = ({ currentJourney }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (currentJourney) {
      ApiClient.getSteps(currentJourney._id).then(steps => {
        setSteps(steps);
      })
    }
  }, [])

  const createStep = () => {
    const newStep = new StepClass();
    newStep.title = 'newStep';
    newStep.emotion = 'happy';
    newStep.score = 4;

    console.log(newStep)
    ApiClient.postStep(currentJourney._id, newStep);
    setSteps([...steps, newStep]);
  }


  return (
    <div className='StepList'>
      {steps.length && steps.map((step) => {
        return (
          <div key={step.title} className='stepContainer'>
            <button className='addStep' onClick={() => {
              createStep()
            }
            }>+</button>
            <Step step={step} />
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


