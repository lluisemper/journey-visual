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
        <p>Create new journey</p>
        <input className="textInput"
          type='text'
          name='title'
        />

        <input className="submitBtn"
          type='submit'
          value='create'
        />
      </form>
      <div className="journeyContainer">
        {journeys.length ? journeys.map((journey) => {
          return <Journey key={journey._id} journey={journey} setCurrentJourney={setCurrentJourney} />
        }) : ''}
      </div>
    </div>
  )
}

export default JourneyList