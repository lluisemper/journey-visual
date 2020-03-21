import React from 'react';
import './PersonaList.css';
import Persona from '../../components/Persona/Persona';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const PersonaList = ({ currentJourney, addPersona, setCurrentPersona, personas }) => {

  return (
    <div className='JourneyList'>
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
      <div className="journeyContainer">
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
  
}

const mapStateToProps = (state) => ({
  personas: state.uiState.personas,
  currentPersona: state.uiState.currentPersona,
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaList);
