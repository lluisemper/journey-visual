import React, { useEffect } from 'react';
import './PersonaList.css';
import Persona from '../../components/Persona/Persona';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import ApiClient from '../../ApiClient';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PersonaList = ({ currentJourney, setCurrentPersona, personas, setPersonas, postPersona, journeys, setCurrentJourney }) => {
  const classes = useStyles();

  useEffect(() => {
    if (currentJourney) {

      ApiClient.getPersonas(currentJourney._id).then(personas => {
        setPersonas(personas)
        setCurrentPersona(personas[0]);
      })
    }
  }, [currentJourney])

  const addPersona = (id, e) => {
    e.preventDefault();
    postPersona(id, e.target.title.value);
  }

  return (
    <div className='PersonaList mainContainer'>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Journeys</InputLabel>
        <Select defaultValue="" input={<Input id="grouped-select" onChange={(e) => {
          e.preventDefault();
          const selectedJourney = journeys.find((journey) => {            
            return journey._id === e.target.value});          
          setCurrentJourney(selectedJourney);
        }} />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {currentJourney &&
            journeys.map(journey => {
              return <MenuItem value={journey._id}>{journey.title}</MenuItem>
            })}
        </Select>
      </FormControl>
      <form onSubmit={(e) => {
        addPersona(currentJourney._id, e);
      }
      }>
        <p>Create new persona</p>
        <input className="textInput"
          type='text'
          name='title'
        />
        <input className="submitBtn"
          type='submit'
          value='create'
        />
      </form>
      <div className="personaWrapper">
        {personas.length ? personas.map((persona) => {
          return <Persona key={persona._id} persona={persona} setCurrentPersona={setCurrentPersona}
          />
        }) : ''}
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  setPersonas: uiStateActions.setPersonas,
  postPersona: uiStateActions.postPersona,
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setCurrentJourney: uiStateActions.setCurrentJourney
}

const mapStateToProps = (state) => ({
  personas: state.uiState.personas,
  journeys: state.uiState.journeys,
  currentJourney: state.uiState.currentJourney,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaList);
