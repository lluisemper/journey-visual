import React from 'react';
import './Questionnaire.css';
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

const Questionnaire = () => {

  const classes = useStyles();
  return (
    <div className='Questionnaire mainContainer'>
      <form className={classes.root} noValidate autoComplete="off" onSubmit=''>
        <TextField id="outlined-basic" label="Company" variant="outlined" onChange='' />
        <Button className="save-btn"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          type='submit'
        >
          Save
      </Button>
        <TextField id="outlined-basic" label="Topic" variant="outlined" onChange='' />
        <Button className="save-btn"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          type='submit'
        >
          Save
      </Button>
      </form>
    </div>
  );
}

export default Questionnaire;
