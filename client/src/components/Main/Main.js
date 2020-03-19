import React, { useState, useEffect } from 'react';
import './Main.css';
import Chart from '../Chart/Chart';
import StepList from '../StepList/StepList';
import { Link } from "react-router-dom";
import JourneyList from '../JourneyList/JourneyList';
import ApiClient from '../../ApiClient';

const Main = () => {

  const [journeys, setJourneys] = useState([]);
  const [currentJourney, setCurrentJourney] = useState(null);

  useEffect(() => {
    ApiClient.getJourneys().then(journeys => {
      setJourneys(journeys)
      if (journeys.length) {
        setCurrentJourney(journeys[0]);
      }
    });
  }, []);

  const addJourney = (e) => {
    e.preventDefault();
    ApiClient.postJourney(e.target.title.value).then(newJourney => {
      setJourneys((stateJourneys) => [...stateJourneys, newJourney])
      if (!currentJourney) {
        setCurrentJourney(newJourney);
      }
    }
    );
  }

  return (
    <div className="Main">

      <h1>My Journey's</h1>
      <JourneyList setCurrentJourney={setCurrentJourney} journeys={journeys} addJourney={addJourney} />
      <div className="border"></div>
      <h1>Steps</h1>
      <StepList currentJourney={currentJourney} />
      <div className="border"></div>
      <div className="layout-distribution">
      </div>
      <Chart ></Chart>
      <Link to="/review">
        <button type="button" className="check-button">
          ✓
          </button>
      </Link>
    </div>
  );
}

export default Main;
