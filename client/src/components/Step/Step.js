import React from 'react';
import './Step.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  const [expanded, setExpanded] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [comments, setComments] = React.useState('');
  const [emotion, setEmotion] = React.useState('');
  const [score, setScore] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div  id="step">
    
        <div className="iconWrapper">
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
        
        {edit ?
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="title" variant="standard" onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }} />
            <TextField id="standard-basic" label="comments" variant="standard" onChange={(e) => {
              e.preventDefault();
              setComments(e.target.value);
            }} />
            <TextField id="standard-basic" label="emotion" variant="standard" onChange={(e) => {
              e.preventDefault();
              setEmotion(e.target.value);
            }} />
            <TextField id="standard-basic" label="score" variant="standard" onChange={(e) => {
              e.preventDefault();
              setScore(e.target.value);
            }} />
            <IconButton aria-label="settings" onClick={() => {
              step.title = title;
              step.comments = comments;
              step.emotion = emotion;
              step.score = score;
              ApiClient.updateStep(step);
              setTitle('');
              setComments('');
              setEmotion('');
              setScore('');
              setEdit(!edit);
            }}>
              <DoneIcon />
            </IconButton>

          </form>
          :
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              {step.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {step.comments}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {step.emotion}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {step.score}
            </Typography>
          </div>
        }

    </div >
  );
}

export default Step

