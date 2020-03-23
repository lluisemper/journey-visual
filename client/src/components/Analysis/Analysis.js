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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Analysis ({ journeys, personas, setCurrentJourney, setCurrentPersona, currentJourney }) {
  const classes = useStyles();

  return (
    <div className="mainContainer">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" input={<Input id="grouped-native-select" onChange={(e) => {
          e.preventDefault();
          const selectedJourney = journeys.filter((journey) => journey._id === e.target.value);
          setCurrentJourney(selectedJourney[0]);
        }} />}>
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            {currentJourney &&
              journeys.map(journey => {
                return <option value={journey._id}>{journey.title}</option>
              })}
          </optgroup>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" input={<Input id="grouped-select" />} onChange={(e) => {
          e.preventDefault();
          const selectedPersona = personas.filter((persona) => persona === e.target.value);
          setCurrentPersona(selectedPersona);
        }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
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

}



const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,
  personas: state.uiState.personas,

  currentJourney: state.uiState.currentJourney,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis);
