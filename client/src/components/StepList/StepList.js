import React from 'react';
import './StepList.css';
import Step from '../Step/Step';
import ApiClient from '../../ApiClient';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';



const StepList = ({ currentJourney, steps, setSteps}) => {
  
  const createStep = (index) => {
    ApiClient.postStep(currentJourney._id, {}, index).then(() => {
      getSteps();
    })
  }

  const getSteps = () => {
    ApiClient.getSteps(currentJourney._id).then(steps => {
      setSteps(steps);
    })
  }

  if (currentJourney) {
      getSteps();
    }

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
    <div className='StepList'>
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
  
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);


