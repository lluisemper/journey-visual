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
  const [emotion, setEmotion] = React.useState(step.emotion);
  const [score, setScore] = React.useState(step.score);

  const InputProps = {
    disabled: edit ? false : true
  };

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
        <TextField id="standard-basic" label="emotion" value={emotion} variant="standard" InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setEmotion(e.target.value);
        }} />
        <TextField id="standard-basic" label="score" value={score} variant="standard" InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setScore(e.target.value);
        }} />
        {edit && <IconButton className="card-save-btn" aria-label="settings" onClick={() => {
          step.title = title;
          step.comments = comments;
          step.emotion = emotion;
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

