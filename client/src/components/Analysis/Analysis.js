import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import StepList from '../../components/StepList/StepList';
import ApiClient from '../../ApiClient';
import Chart from '../Chart/Chart';
import Button from '@material-ui/core/Button';
import './Analysis.css';
import Comparison from '../Comparison/Comparison';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Analysis ({ journeys, personas, setCurrentJourney, setCurrentPersona, currentJourney, setSteps, currentPersona, setPersonas, steps, setFirstSteps, setSecondtSteps }) {

  const classes = useStyles();
  const [chartActive, setChartActive] = useState(false);
  const [comparisonActive, setComparisonActive] = useState(false);
  const [comparedPersona, setComparedPersona] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setChartActive(!chartActive);
    setFirstSteps(steps);
  }

  return (
    <div className="mainContainer Analysis">
      <h3>Select a journey and persona</h3>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Journeys</InputLabel>
        <Select defaultValue="" input={<Input id="grouped-select" onChange={(e) => {
          e.preventDefault();
          const selectedJourney = journeys.find((journey) => journey._id === e.target.value);
          setCurrentJourney(selectedJourney);
          ApiClient.getPersonas(selectedJourney._id).then(personas => {
            setPersonas(personas)
            setCurrentPersona(personas[0]);
          })
        }} />}>
          <MenuItem value="">
            {currentJourney ? <em>{currentJourney.title}</em> : ''}
          </MenuItem>
          {currentJourney &&
            journeys.map(journey => {
              return <MenuItem value={journey._id}>{journey.title}</MenuItem>
            })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Personas</InputLabel>
        <Select defaultValue="" input={<Input id="grouped-select" />} onChange={(e) => {
          e.preventDefault();
          const selectedPersona = personas.find((persona) => {
            return persona._id === e.target.value._id;
          });
          setCurrentPersona(selectedPersona);
          ApiClient.getSteps(selectedPersona._id).then(steps => {
            setSteps(steps);
          })
        }}>
          <MenuItem value="">
            {currentPersona ? <em>{currentPersona.title}</em> : ''}
          </MenuItem>
          {currentJourney &&
            personas.map(persona => {
              return <MenuItem value={persona}>{persona.title}</MenuItem>
            })}
        </Select>
      </FormControl>
      {
        currentPersona &&
          <img className="persona-img-analysis" src={currentPersona.imagePath}></img>
      }

      <h3>Create steps</h3>
      <StepList />
      <div className="border"></div>
      <Button id="chartButton" variant="outlined" color="primary" onClick={(e) => {
        handleClick(e);
      }}>
        Generate Customer Journey
      </Button>
      {chartActive ?
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Compare Journeys</InputLabel>
        <Select value={comparedPersona} onChange={(e) => {
          e.preventDefault();
          const selectedPersona = personas.find((persona) => {
            return persona.title === e.target.value;
          });
          setComparedPersona(e.target.value)
          ApiClient.getSteps(selectedPersona._id).then(steps => {
            setSecondtSteps(steps);
          })
        }}>
          <MenuItem value="">
            {/* {currentPersona ? <em>{currentPersona.title}</em> : ''} */}
          </MenuItem>
          {currentJourney &&
            personas.filter((persona) => persona.title !== currentPersona.title).map((persona) => {
              return <MenuItem value={persona.title}>{persona.title}</MenuItem>
            })}
        </Select>
      </FormControl>
         : null}
      <Button id="chartButton" variant="outlined" color="primary" onClick={() => {
        setComparisonActive(!comparisonActive);
      }}>
        Compare personas
      </Button>
      {chartActive && <Chart />}
      {comparisonActive && <Comparison />}

    </div >
  );
}

const mapDispatchToProps = {
  setJourneys: uiStateActions.setJourneys,
  postJourney: uiStateActions.postJourney,
  setCurrentJourney: uiStateActions.setCurrentJourney,
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setSteps: uiStateActions.setSteps,
  setPersonas: uiStateActions.setPersonas,
  setFirstSteps: uiStateActions.setFirstSteps,
  setSecondtSteps: uiStateActions.setSecondtSteps
}

const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,
  personas: state.uiState.personas,
  currentPersona: state.uiState.currentPersona,
  currentJourney: state.uiState.currentJourney,
  steps: state.uiState.steps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis);