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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: 20,
    marginTop: 0,
    minWidth: 120,
    width: 100
  },
}));

const PersonaList = ({ currentJourney, setCurrentPersona, personas, setPersonas, postPersona, journeys, setCurrentJourney }) => {
  const classes = useStyles();

  const [title, setTitle] = React.useState('');

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

      <h1>My Persona's</h1>
      <h3>Create new persona</h3>
      <p className="description"> Select a journey<br />
         Now you can create specific persona's that belong to that journey.
        </p>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Journeys</InputLabel>
        <Select defaultValue="" input={<Input id="grouped-select" onChange={(e) => {
          e.preventDefault();
          const selectedJourney = journeys.find((journey) => {
            return journey._id === e.target.value
          });
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


      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {
        postPersona(currentJourney._id, title);
        setTitle('');
      }}>
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }} />
        <Button id="save-btn-persona"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          type='submit'
        >
          Save
      </Button>
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
