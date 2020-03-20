import React from 'react';
import './Persona.css';
import personIcon from '../../assets/clipart2682703.png';
import Popup from "reactjs-popup";

const Persona = ({ persona, setCurrentPersona }) => {


  return (
    <button className='Persona' onClick={() => {
      setCurrentPersona(persona)
    }
    }>
      <h1>{persona.title}</h1>
      <img className="personIcon" src={personIcon}></img>

      <Popup trigger={<button>details</button>} position="top left">
        {close => (
          <div className="popUp">
            <h1>{persona.title}</h1>
            <h1>Description</h1>
            <p>Carlos is a real family man, he has a good job and likes structure in his live. He like the feeling of being in control</p>
            <h1>Characteristics</h1>
            <h3>30 - 40 years old</h3>
            <h3>married</h3>
            <h3>2 children</h3>
            <h3>60K income</h3>
            <a className="close" onClick={close}>
              &times;
        </a>
          </div>
        )}
      </Popup>


    </button>
  )
}

export default Persona