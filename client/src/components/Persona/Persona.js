import React from 'react';
import './Persona.css';

const Persona = ({ persona, setCurrentPersona }) => {
  return (
    <button className='Persona' onClick={() => {
      setCurrentPersona(persona)
    }
    }>
      <h1>{persona.title}</h1>
    </button>
  )
}

export default Persona