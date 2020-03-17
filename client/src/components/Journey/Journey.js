import React from 'react';
import './Journey.css';

const Journey = ({ journey, setCurrentJourney }) => {
  return (
    <div className='Journey' onClick={() => {
      setCurrentJourney(journey)
    }
    }>
      <h1>{journey.title}</h1>
    </div>
  )
}

export default Journey