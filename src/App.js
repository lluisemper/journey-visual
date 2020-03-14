import React, { useState } from 'react';
import './App.css';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from 'recharts';



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
      <input type='text' value={inputChart} onChange={(e) => setInputChart(e.target.value)} placeholder="Insert a title..."></input>
      <input type='text' value={inputEmotions} onChange={(e) => setInputEmotions(e.target.value)} placeholder="Insert a emotion..."></input>
      <input type='number' min="0" max="5" value={numberChart} onChange={(e) => setNumberChart(e.target.value)}></input>
      <button onClick={handleChange}>Create</button>

      <LineChart
        width={array.length * 100}
        height={300}
        data={array}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 5]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      <h3>{array.length ? arrayEmotions.map(el => el.count + '.-'+ el.inputChart + ': ' + el.inputEmotions + '-----------') : null}</h3>

    </div>
  );
}

export default App;
