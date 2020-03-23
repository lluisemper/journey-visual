import React, { useEffect } from 'react';
import './Main.css';
import Chart from '../Chart/Chart';
import StepList from '../StepList/StepList';
import { Link } from "react-router-dom";
import ApiClient from '../../ApiClient';
import PersonaList from '../../components/PersonaList/PersonaList';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const Main = ({ personas, setPersonas, currentPersona, setCurrentPersona, currentJourney, postPersona }) => {
  
  useEffect(() => {
    if (currentJourney) {
      ApiClient.getPersonas(currentJourney._id).then(personas => {
        setPersonas(personas)
        setCurrentPersona(personas[0]);
      })
    }
  }, [currentJourney])

  const addPersona = (id, e) => {
    e.preventDefault();
    postPersona(id, e.target.title.value)
  }
  
  return (
    <div className="Main">
     
      <div className="mainContainer">
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


