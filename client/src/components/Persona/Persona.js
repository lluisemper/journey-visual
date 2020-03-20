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


      <Popup trigger={<button>Trigger</button>} position="top left">
        {close => (
          <div className="popUp">

            <h1>{persona.title}</h1>

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