import React, { useState, useEffect } from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';

const JourneyList = ({ journeys, setCurrentJourney }) => {
  

  return (
    <div className='JourneyList'>
      {journeys.length && journeys.map((journey) => {
        return <Journey key={journey.title} journey={journey} setCurrentJourney={setCurrentJourney} />
      })}
    </div>
  )
}

export default JourneyList