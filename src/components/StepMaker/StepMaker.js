import React, { useState } from 'react';
import './StepMaker.css';
import Form from '../Form/Form';
import Chart from '../Chart/Chart';
import EmotionsDisplay from '../EmotionsDisplay/EmotionsDisplay';
import { Link } from "react-router-dom";


const StepMaker = () => {

  const [array, setArray] = useState([]);
  const [arrayEmotions, setArrayEmotions] = useState([]);
  const [inputChart, setInputChart] = useState('')
  const [numberChart, setNumberChart] = useState('')
  const [inputEmotions, setInputEmotions] = useState('')

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

  return (
    <div className="StepMaker">
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

export default StepMaker;
