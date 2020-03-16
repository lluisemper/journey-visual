import React from 'react';
import './Journey.css';

const Journey = (journey) => {
  return (
    <div className='Journey'>
      <h1>{journey.name}</h1>
    </div>
  )
}

export default Journey