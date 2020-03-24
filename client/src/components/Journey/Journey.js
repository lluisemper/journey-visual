import React from 'react';
import './Journey.css';
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
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';



const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 150,
    minHeight: 150,
    margin: 20
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

const Journey = ({ journey, setCurrentJourney, journeys, setJourneys, currentJourney }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState(journey.title);

  const InputProps = {
    disabled: edit ? false : true
  };

  return (
    <div className="card" id="Journey" onClick={() => {
      setCurrentJourney(journey)
    }}>
      <div className="card-icon-wrapper">
        <IconButton aria-label="settings" onClick={() => {
          setEdit(!edit);
        }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
          ApiClient.deleteJourney(journey).then(() => {
            const newJourneys = journeys.filter((el) => el._id !== journey._id);
            if (currentJourney._id === journey._id) {
              setCurrentJourney(newJourneys[0])
            }
            setJourneys(newJourneys);
          })
        }} >
          <DeleteIcon />
        </IconButton>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="title" value={title} variant="standard" InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }} />
        {edit && <IconButton aria-label="settings" onClick={() => {
          journey.title = title;
          ApiClient.updateJourney(journey);
          setEdit(!edit);
        }}>
          <DoneIcon />
        </IconButton>}
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  setJourneys: uiStateActions.setJourneys,

}

const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,
  currentJourney: state.uiState.currentJourney,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Journey);

