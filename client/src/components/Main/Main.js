import React, { useState, useEffect } from 'react';
import './Main.css';
import Form from '../Form/Form';
import Chart from '../Chart/Chart';
import EmotionsDisplay from '../EmotionsDisplay/EmotionsDisplay';
import StepList from '../StepList/StepList';
import { Link } from "react-router-dom";
import JourneyList from '../JourneyList/JourneyList';
import ApiClient from '../../ApiClient';

const Main = () => {

  const [array, setArray] = useState([]);
  const [arrayEmotions, setArrayEmotions] = useState([]);
  const [inputChart, setInputChart] = useState('')
  const [numberChart, setNumberChart] = useState('')
  const [inputEmotions, setInputEmotions] = useState('')
  const [journeys, setJourneys] = useState([]);
  const [currentJourney, setCurrentJourney] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    const data = {
      name: array.length + ': ' + inputChart,
      pv: numberChart,
    }

    const listEmotions = {
      inputChart,
      inputEmotions,
      count: array.length
    }

    setArray([...array, data])
    setArrayEmotions([...arrayEmotions, listEmotions])
  }

  useEffect(() => {
    ApiClient.getJourneys().then(journeys => {
      setJourneys(journeys)
      if (journeys.length) {
        setCurrentJourney(journeys[0]);
      }
    });

  }, []);

  const addJourney = () => {
    ApiClient.postJourney('new journey')
    .then(newJourney => setJourneys((stateJourneys) => [...stateJourneys, newJourney])
    );
}


  return (
    <div className="Main">

      <h1>My Journey's</h1>
      <JourneyList setCurrentJourney={setCurrentJourney} journeys={journeys} addJourney={addJourney}/>
      <div className="border"></div>
      <h1>Steps</h1>
      <StepList currentJourney={currentJourney} />
      <div className="border"></div>


      <div className="layout-distribution">
        <Form handleChange={handleChange} setInputChart={setInputChart} setInputEmotions={setInputEmotions} setNumberChart={setNumberChart} ></Form>
        <EmotionsDisplay arrayEmotions={arrayEmotions}></EmotionsDisplay>
      </div>
      <Chart array={array}></Chart>
      <Link to="/review">
        <button type="button" className="check-button">
          ✓
          </button>
      </Link>
    </div>
  );
}

export default Main;
