import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';

const JourneyList = ({ journeys, setCurrentJourney, addJourney }) => {

  return (
    <div className='JourneyList'>
      {journeys.length && journeys.map((journey) => {
        return <Journey key={journey._id} journey={journey} setCurrentJourney={setCurrentJourney} />
      })}
      <button onClick={addJourney}>add journey</button>
    </div>
  )
}

export default JourneyList