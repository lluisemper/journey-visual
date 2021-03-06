import React, { useState } from 'react';
import './Persona.css';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ApiClient from '../../ApiClient';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import FileUpload from '../FileUpload/FileUpload';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 600,
    minHeight: 200,
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

const Persona = ({ setCurrentPersona, persona }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(persona.title);

  const InputProps = {
    disabled: edit ? false : true
  };

  return (
    <div className="card" onClick={() => {
      setCurrentPersona(persona)
    }} >
      <div className="card-icon-wrapper">
        <IconButton aria-label="settings" onClick={() => {
          setEdit(!edit);
        }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
          ApiClient.deletePersona(persona);
        }} >
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="popup-btn" >
        <Popup className="popup-content" trigger={<Button variant="outlined" color="primary">
          Profile
</Button>} position="top left">
          {close => (
            <div >
              <h3>{`Profile ${persona.title}`}</h3>
              <h5>{`Age: ${persona.age}`}</h5>
              <h5>{`Marital status: ${persona.marital_status}`}</h5>
              <h5>{`Occupation: ${persona.occupation}`}</h5>
              <h5>{`Income: ${persona.income}`}</h5>
              <h5>{`Hobby's: ${persona.hobbys}`}</h5>
              <a className="close" onClick={close}>
                &times;
        </a>
            </div>
          )}
        </Popup>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="title" variant="standard" value={title} InputProps={InputProps} onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }} />
        {
          edit &&
          <div>
            <FileUpload />
            <IconButton aria-label="settings" onClick={() => {
              persona.title = title;
              ApiClient.updatePersona(persona);
              setEdit(!edit);
            }}>
              <DoneIcon />
            </IconButton>
          </div>
        }
      </form>
      {!edit && <img className="persona-img" src={persona.imagePath}></img>}
    </div >
  );
}

const mapDispatchToProps = {
  setCurrentPersona: uiStateActions.setCurrentPersona,
  setPersonas: uiStateActions.setPersonas
}

export default connect(
  null,
  mapDispatchToProps
)(Persona);
