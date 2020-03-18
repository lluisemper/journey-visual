import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';

const JourneyList = ({ journeys, setCurrentJourney, addJourney }) => {

  return (
    <div className='JourneyList'>
      <form onSubmit={(e) => {
        addJourney(e)
      }
     }>
        <p>Add new Journey</p>
        <input
          type='text'
          name='title'
        />
        <input
          type='submit'
        />
      </form>
      <div className="journeyContainer">
        {journeys.length && journeys.map((journey) => {
          return <Journey key={journey._id} journey={journey} setCurrentJourney={setCurrentJourney} />
        })}
      </div>
    </div>
  )
}

export default JourneyList