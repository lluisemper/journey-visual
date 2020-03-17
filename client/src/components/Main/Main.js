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

  // const[initialState, setInitialState] = ({
  //   array: [],
  //   arrayEmotions: ''
  // })
  const [array, setArray] = useState([]);
  const [arrayEmotions, setArrayEmotions] = useState([]);
  const [inputChart, setInputChart] = useState('')
  const [numberChart, setNumberChart] = useState('')
  const [inputEmotions, setInputEmotions] = useState('')
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

  const [journeyList, setJourneyList] = useState([]);

  useEffect(() => {
    const journeys = ApiClient.getJourneys();
    setJourneyList(journeys);
    if (journeyList.lenght) {
      setCurrentJourney(journeyList[0]);
    }
  }, []);



  // useEffect(() => {
  //   setJourneyList([
  //     {
  //       name: 'making coffee', steps: [
  //         { step: 'wants a cup of coffee', emotion: 'happy', score: 4 },
  //         { step: 'empty coffee bin', emotion: 'bored', score: 2 },
  //         { step: 'make coffee', emotion: 'neutral', score: 3 },
  //         { step: 'drink coffee', emotion: 'happy', score: 5 }]
  //     }
  //   ]);
  // }, []);
  return (
    <div className="Main">

      <h1>My Journey's</h1>
      {/* <JourneyList setCurrentJourney={setCurrentJourney} /> */}
      <div className="border"></div>
      <h1>Steps</h1>
      {/* <StepList journey={journeyList} /> */}
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
