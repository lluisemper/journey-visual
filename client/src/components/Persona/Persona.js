import React from 'react';
import './Persona.css';
import personIcon from '../../assets/clipart2682703.png';

const Persona = ({ persona, setCurrentPersona }) => {
  return (
    <button className='Persona' onClick={() => {
      setCurrentPersona(persona)
    }
    }>
      <h1>{persona.title}</h1>
      <img className="personIcon" src={personIcon}></img>
    </button>
  )
}

export default Persona