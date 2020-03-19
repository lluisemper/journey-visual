import React, { useState, useEffect } from 'react';
import './PersonaList.css';
import ApiClient from '../../ApiClient';
import Persona from '../../components/Persona/Persona';

const PersonaList = ({ currentJourney }) => {

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    if (currentJourney) {
      ApiClient.getPersonas(currentJourney._id).then(personas => {
        setPersonas(personas);
      });
    }
  }, [currentJourney])

  return (
    <div className='JourneyList'>
      <form onSubmit={(e) => {
        // addJourney(e)
      }
      }>
        <p>Create new journey</p>
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
          return <Persona key={persona._id} persona={persona} 
          />
        }) : ''}
      </div>
    </div>
  )
}

export default PersonaList