import React, { useEffect } from 'react';
import './StepList.css';
import Step from '../Step/Step';
import ApiClient from '../../ApiClient';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';

const StepList = ({ currentPersona, steps, setSteps }) => {

  const createStep = (index) => {
    console.log(currentPersona)
    ApiClient.postStep(currentPersona._id, {}, index).then(() => {
      getSteps();
    })
  }

  const getSteps = () => {
    ApiClient.getSteps(currentPersona._id).then(steps => {
      setSteps(steps);
    })
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
            <IconButton aria-label="settings" onClick={() => {
              createStep(index)
            }
            }>
              <ArrowLeftIcon />
            </IconButton>
            <Step step={step} addStep={addStep} steps={steps} />
            <IconButton aria-label="settings" onClick={() => {
              createStep(index + 1)
            }
            }>
              <ArrowRightIcon />
            </IconButton>
          </div>
        )
      }) : ''}
      {!steps.length && <button className="plusBtn" onClick={() => {
        createStep();
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


