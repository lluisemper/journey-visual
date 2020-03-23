import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import StepList from '../../components/StepList/StepList';
import ApiClient from '../../ApiClient';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Analysis ({ journeys, personas, setCurrentJourney, setCurrentPersona, currentJourney, setSteps, currentPersona, setPersonas }) {
  const classes = useStyles();

  return (
    <div className="mainContainer Analysis">
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

            return persona._id === e.target.value;
          });
          setCurrentPersona(selectedPersona);


          ApiClient.getSteps(selectedPersona._id).then(steps => {
            setSteps(steps);
          })
        }}>
          {currentPersona ?
            <MenuItem value={currentPersona}>
              <em>{currentPersona.title}</em>
            </MenuItem>
            : null}
          {currentJourney &&
            currentJourney.personas.map(persona => {
              return <MenuItem value={persona}>{persona}</MenuItem>
            })}
        </Select>
      </FormControl>
      <StepList />
    </div>
  );
}

const mapDispatchToProps = {
  setJourneys: uiStateActions.setJourneys,
  postJourney: uiStateActions.postJourney,
  setCurrentJourney: uiStateActions.setCurrentJourney,
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setSteps: uiStateActions.setSteps,
  setPersonas: uiStateActions.setPersonas
}

const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,
  personas: state.uiState.personas,
  currentPersona: state.uiState.currentPersona,
  currentJourney: state.uiState.currentJourney,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis);