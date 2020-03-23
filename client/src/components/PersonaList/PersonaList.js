import React, { useEffect } from 'react';
import './PersonaList.css';
import Persona from '../../components/Persona/Persona';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import ApiClient from '../../ApiClient';

const PersonaList = ({ currentJourney, setCurrentPersona, personas, setPersonas, postPersona }) => {

  useEffect(() => {
    if (currentJourney) {
      ApiClient.getPersonas(currentJourney._id).then(personas => {
        console.log('personas',personas)
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
        <form onSubmit={(e) => {
          addPersona(currentJourney._id, e)
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
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setJourneys: uiStateActions.setJourneys,
  setCurrentJourney: uiStateActions.setCurrentJourney,
  postPersona: uiStateActions.postPersona
}

const mapStateToProps = (state) => ({
  personas: state.uiState.personas,
  currentPersona: state.uiState.currentPersona,
  journeys: state.uiState.journeys,
  currentJourney: state.uiState.currentJourney,
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaList);
