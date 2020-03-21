import React, { useEffect } from 'react';
import './Main.css';
import Chart from '../Chart/Chart';
import StepList from '../StepList/StepList';
import { Link } from "react-router-dom";
import JourneyList from '../JourneyList/JourneyList';
import ApiClient from '../../ApiClient';
import PersonaList from '../../components/PersonaList/PersonaList';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponsiveDrawer';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const Main = ({ personas, setPersonas, currentPersona, setCurrentPersona, postJourney, journeys, setJourneys, currentJourney, setCurrentJourney, postPersona }) => {


  useEffect(() => {
    ApiClient.getJourneys().then(journeys => {
      setJourneys(journeys)
      if (journeys.length) {
        setCurrentJourney(journeys[0]);
      }
    });
  }, []);

  useEffect(() => {
    if (currentJourney) {
      ApiClient.getPersonas(currentJourney._id).then(personas => {
        setPersonas(personas)
        setCurrentPersona(personas[0]);
      })
    }
  }, [currentJourney])


  const addJourney = (e) => {
    e.preventDefault();
    postJourney(e.target.title.value);

  }

  const addPersona = (id, e) => {
    e.preventDefault();
    postPersona(id, e.target.title.value)
  }

  console.log('currentPersona', currentPersona);
  
  return (
    <div className="Main">
      <ResponsiveDrawer />
      <div className="mainContainer">
        <h1>My Journey's</h1>
        <JourneyList setCurrentJourney={setCurrentJourney} journeys={journeys} addJourney={addJourney} />
        <div className="border"></div>
        <h1>Persona's</h1>
        <PersonaList currentJourney={currentJourney} addPersona={addPersona} setCurrentPersona={setCurrentPersona} personas={personas} />
        <div className="border"></div>
        <h1>Steps</h1>
        {currentPersona && <StepList currentPersona={currentPersona} />}
        <div className="border"></div>
        <div className="layout-distribution">
        </div>
        <Chart></Chart>
        <Link to="/review">
          <button type="button" className="check-button">
            ✓
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setPersonas: uiStateActions.setPersonas,
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setJourneys: uiStateActions.setJourneys,
  setCurrentJourney: uiStateActions.setCurrentJourney,
  postJourney: uiStateActions.postJourney,
  postPersona: uiStateActions.postPersona,

}

const mapStateToProps = (state) => ({
  personas: state.uiState.personas,
  currentPersona: state.uiState.currentPersona,
  journeys: state.uiState.journeys,
  currentJourney: state.uiState.currentJourney,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);


