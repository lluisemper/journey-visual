import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';

const JourneyList = ({ journeyList }) => {

  return (
    <div className='Step'>
      {console.log(journeyList)}
      {journeyList.length && journeyList.map((journey) => {
        return <Journey journey={journey} />
      })}
    </div>
  )
}

export default JourneyList