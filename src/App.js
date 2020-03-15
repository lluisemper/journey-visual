import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Chart from './components/Chart/Chart';
import EmotionsDisplay from './components/EmotionsDisplay/EmotionsDisplay';


const App = () => {


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
    <div className="App">
      <div className="layout-distribution">
        <Form handleChange={handleChange} setInputChart={setInputChart} setInputEmotions={setInputEmotions} setNumberChart={setNumberChart} ></Form>
        <EmotionsDisplay arrayEmotions={arrayEmotions}></EmotionsDisplay>
      </div>
      <Chart array={array}></Chart>
    </div>
  );
}

export default App;
