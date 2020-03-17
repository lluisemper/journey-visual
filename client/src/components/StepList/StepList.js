import React, { useState, useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import StepClass from '../../StepClass';
import ApiClient from '../../ApiClient';

const getOrderSteps = (steps) => {
  let current = steps.find((step) => step.prev === null);
  let arr = [];

  while (current) {
    arr.push(current);
    current = current.next;
  }
  return arr;
}

const StepList = ({ journey }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {

    const step1 = new StepClass();
    step1.setTitle('wants a cup of coffee');
    step1.setEmotion('happy');
    step1.setScore('4');

    const step2 = new StepClass();
    step2.setTitle('empty coffee bin');
    step2.setEmotion('happy');
    step2.setScore('4');
    step2.setPrev(step1);
    step1.setNext(step2);

    const step3 = new StepClass();
    step3.setTitle('make coffee');
    step3.setEmotion('neutral');
    step3.setScore('3');
    step3.setPrev(step2);
    step2.setNext(step3);

    setSteps([
      step1, step2, step3
    ]);
  }, [])

[1323,4423,22,223,454,555]


  const createStep = (step, direction) => {
    const newStep = new StepClass();
    if (direction === 'before') {
      step.prev.next = newStep;
      step.prev = newStep;
      newStep.next = step;
      newStep.prev = step.prev;
    }
    else if (direction === 'after') {
      step.next.prev = newStep;
      step.next = newStep;
      newStep.prev = step;
      newStep.next = step.next.next;
    }
    setSteps([...steps, newStep]);
  }

  const orderSteps = getOrderSteps(steps);


  return (
    <div className='StepList'>
      {steps.length && orderSteps.map((step) => {
        return (
          <div key={step.title} className='stepContainer'>
            <button className='addStep' onClick={() => {
              createStep(step, 'before')
            }
            }>+</button>
            <Step step={step}  />
            <button className='addStep' onClick={() => {
              createStep(step, 'after')
            }
            }>+</button>
          </div>
        )
      })}
    </div>
  )
}

export default StepList


