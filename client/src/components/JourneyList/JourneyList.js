import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const JourneyList = ({ journeys, setCurrentJourney, postJourney }) => {

  

  console.log('mounted')

  const addJourney = (e) => {
    e.preventDefault();
    postJourney(e.target.title.value);
  }
  return (
    <div className='JourneyList mainContainer'>
        <form onSubmit={(e) => {
          addJourney(e)
        }
        }>
          <h1>My Journey´s</h1>
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
const mapDispatchToProps = {
  setJourneys: uiStateActions.setJourneys,
  postJourney: uiStateActions.postJourney,
  setCurrentJourney: uiStateActions.setCurrentJourney,

}

const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JourneyList);
