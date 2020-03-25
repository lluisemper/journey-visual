import React from 'react';
import './JourneyList.css';
import Journey from '../Journey/Journey';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const JourneyList = ({ journeys, setCurrentJourney, postJourney }) => {

  const classes = useStyles();
  const [title, setTitle] = React.useState('');

  return (
    <div className='JourneyList mainContainer'>
      <h1>My Journey´s</h1>
      <h3>Create new journey</h3>
      <p className="description">Describe the main topic of your customer journey. <br />
         After creating a journey you can start adding persona's to that journey
        </p>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={() => {
        postJourney(title);
        setTitle('');
      }}>
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }} />
        <Button id="save-btn-journey"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          type='submit'
        >
          Save
      </Button>
      </form>


      <div className="journeyContainer">
        {journeys.length ? journeys.map((journey) => {
          return <Journey key={journey._id} journey={journey} setCurrentJourney={setCurrentJourney} />
        }) : ''}
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  setJourneys: uiStateActions.setJourneys,
  postJourney: uiStateActions.postJourney,
  setCurrentJourney: uiStateActions.setCurrentJourney,
}

const mapStateToProps = (state) => ({
  journeys: state.uiState.journeys,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JourneyList);
