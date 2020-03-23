import React, { useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import ApiClient from '../../ApiClient';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const StepList = ({ currentPersona, steps, setSteps }) => {
  
  
  const createStep = (index) => {
    ApiClient.postStep(currentPersona._id, {}, index).then(() => {
      getSteps();
    })
  }

  const getSteps = () => {
    ApiClient.getSteps(currentPersona._id).then(steps => {
      setSteps(steps);
    })
  }

  useEffect(() => {
    getSteps();
  }, [currentPersona]);

  const addStep = (id, stepObj) => {
    ApiClient.updateStep(id, stepObj)
      .then(() => {
        const newSteps = steps.slice()
        const oldStep = newSteps.find(({ _id }) => _id === id);
        Object.assign(oldStep, stepObj)
        setSteps(newSteps)
      })
  }
    
  return (
    <div className='StepList mainContainer'>
      {steps !== undefined && steps.length ? steps.map((step, index) => {
        return (
          <div key={step._id} className='stepContainer'>
            <button className='addStep' onClick={() => {
              createStep(index)
            }
            }></button>
            <Step step={step} addStep={addStep} steps={steps} />
            <button className='addStep' onClick={() => {
              createStep(index + 1)
            }
            }></button>
          </div>
        )
      }) : ''}
      {!steps.length && <button className="plusBtn" onClick={() => {
        createStep()
      }
      }></button>
      }
    </div>
  )
}

const mapDispatchToProps = {
  setSteps: uiStateActions.setSteps,
  
}

const mapStateToProps = (state) => ({
  steps: state.uiState.steps,
  currentPersona: state.uiState.currentPersona,
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);


