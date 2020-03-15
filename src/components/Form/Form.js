import React from 'react';
import './Form.css';

const Form = ({ handleChange, setInputChart, setInputEmotions, setNumberChart }) => {


  return (
    <div className="Form">
      <input type='text' onChange={(e) => setInputChart(e.target.value)} placeholder="Insert a step..."></input>
      <input type='text' onChange={(e) => setInputEmotions(e.target.value)} placeholder="Insert a emotion..."></input>
      <input type='number' min="0" max="5" onChange={(e) => setNumberChart(e.target.value)}></input>
      <button onClick={handleChange}>Create</button>
    </div>
  );
}

export default Form;
