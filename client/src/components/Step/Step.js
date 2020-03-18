import React, {useState} from 'react';
import './Step.css';
import ApiClient from '../../ApiClient';


const Step = ({ step, setSteps, steps }) => {

  const [initialState, setinitialState] = useState({
    title:'',
    emotion:'',
    score:''
  })

  const submitHandler = (e) => {
    e.preventDefault();
    ApiClient.updateStep(step._id, initialState)
    .then((emptyStep) => {
      setSteps([...steps, emptyStep])
    })
  }

  console.log('seeetp',step);
  console.log('initialState',initialState.title);
  console.log('steps',steps);
  
    return (
      <div className='Step'>
      {step.title ? <div>
        <h1>{step.title}</h1>
        <h1>{step.emotion}</h1>
        <h1>{step.score}</h1>
      </div> :
      <form className="stepForm" onSubmit={submitHandler}>
        <h4>Title:</h4>
        <input type='text'onChange={(e) => setinitialState({...initialState, title: e.target.value})}/>
        <h4>Emotion</h4>
        <input type='text'onChange={(e) => setinitialState({...initialState, emotion: e.target.value})}/>
        <h4>Score</h4>
        <input type='text'onChange={(e) => setinitialState({...initialState, score: e.target.value})}/>
        <input type='submit'/>
      </form>} 
     </div>
    )
  
}

export default Step