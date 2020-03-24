import React from 'react';
import './Step.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ApiClient from '../../ApiClient';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import Emoji from '../Emoji/Emoji';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 350,
    minHeight: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'cover',

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Step = ({ step }) => {
  const classes = useStyles();
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState(step.title);
  const [comments, setComments] = React.useState(step.comments);
  const [score, setScore] = React.useState('');

  const InputProps = {
    disabled: edit ? false : true
  };

  const emotion_score = [
    {
      score: 1,
      symbol: "🤯"
    },
    {
      score: 2,
      symbol: "😤"
    },
    {
      score: 3,
      symbol: "😠"
    },
    {
      score: 4,
      symbol: "😟"
    },
    {
      score: 5,
      symbol: "🤨"
    },
    {
      score: 6,
      symbol: "😐"
    },
    {
      score: 7,
      symbol: "🙂"
    },
    {
      score: 8,
      symbol: "😁"
    },
    {
      score: 9,
      symbol: "😍"
    },
    {
      score: 10,
      symbol: "🤩"
    },
  ]

 

  return (
    <div className="card">
      <div className="card-icon-wrapper">
        <IconButton aria-label="settings" onClick={() => {
          setEdit(!edit);
        }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
          ApiClient.deleteStep(step);
        }} >
          <DeleteIcon />
        </IconButton>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="title" value={title} variant="standard" InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }} />
        <TextField id="standard-basic" label="comments" value={comments} variant="standard" InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setComments(e.target.value);
        }} />
        <FormControl disabled={edit ? false : true} >
          <InputLabel htmlFor="grouped-select">Emotion</InputLabel>
          <Select value={step.score} onChange={(e) => {
            setScore(e.target.value);
          }}>
            <MenuItem value=''>
              {/* <Emoji symbol={emotion_score.find(emoji=> emoji.score === step.score).symbol} label="" /> */}
            </MenuItem>
            {emotion_score.map(emoji => {
              return <MenuItem value={emoji.score}> <Emoji symbol={emoji.symbol} label="" /></MenuItem>
            })}
          </Select>
        </FormControl >
        <TextField id="standard-basic" label="score" value={score} variant="standard" disabled={true} onChange={(e) => {
          e.preventDefault();
          setScore(e.target.value);
        }} />
        {edit && <IconButton className="card-save-btn" aria-label="settings" onClick={() => {
          step.title = title;
          step.comments = comments;
          step.score = score;
          ApiClient.updateStep(step);
          setEdit(!edit);
        }}>
          <DoneIcon />
        </IconButton>}
      </form>
    </div >
  );
}

export default Step

