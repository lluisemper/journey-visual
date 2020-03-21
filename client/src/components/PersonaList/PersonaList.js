import React from 'react';
import './PersonaList.css';
import Persona from '../../components/Persona/Persona';

const PersonaList = ({ currentJourney, addPersona, setCurrentPersona, personas }) => {

  return (
    <div className='PersonaList'>
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

export default PersonaList