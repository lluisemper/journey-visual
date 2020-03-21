import React, { useState } from 'react';
import './Step.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Step = ({ step, addStep }) => {
  const classes = useStyles();
  
  const [initialState, setinitialState] = useState({
    title: '',
    comments: '',
    emotion: '',
    score: ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
    addStep(step._id, initialState)
  }

  return (
    
    <form className={classes.root, 'Step'} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Title" variant="standard" />
      <TextField id="standard-basic" label="Comments" variant="standard" />
      <TextField id="standard-basic" label="Emotion" variant="standard" />
      <TextField id="standard-basic" label="Score" variant="standard" />
    </form>



    // <div className='Step'>
    //   {step.title ? <div className="step-active">
    //     <h1>{step.title}</h1>
    //     <h1>{step.comments}</h1>
    //     <h1>{step.emotion}</h1>
    //     <h1>{step.score}</h1>
    //   </div> :
    //     <form className="stepForm" onSubmit={submitHandler}>
    //       <div className="wrapper">
    //         <h4>Title:</h4>
    //         <input type='text' onChange={(e) => setinitialState({ ...initialState, title: e.target.value })} />
    //       </div>
    //       <div className="wrapper">
    //         <h4>Comments</h4>
    //         <input type='text' onChange={(e) => setinitialState({ ...initialState, comments: e.target.value })} />
    //       </div>
    //       <div className="wrapper">
    //         <h4>Emotion</h4>
    //         <input type='text' onChange={(e) => setinitialState({ ...initialState, emotion: e.target.value })} />
    //       </div>
    //       <div className="wrapper">
    //         <h4>Score</h4>
    //         <input type='text' onChange={(e) => setinitialState({ ...initialState, score: e.target.value })} />
    //       </div>
    //       <input type='submit' />
    //     </form>}
    // </div>
  )

}

export default Step

