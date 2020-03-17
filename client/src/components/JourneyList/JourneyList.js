import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';

const JourneyList = ({ journeyList, setCurrentJourney}) => {

  return (
    <div className='Step'>
      {console.log(journeyList)}
      {journeyList.length && journeyList.map((journey) => {
        return <Journey journey={journey} setCurrentJourney={setCurrentJourney}/>
      })}
    </div>
  )
}

export default JourneyList