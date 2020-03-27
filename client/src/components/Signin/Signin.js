import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Signin.css';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const BASE_URL = process.env.REACT_APP_URL || process.env.URL;

console.log('BASE_URL',BASE_URL);


const SignIn = () => {
  const classes = useStyles();

  return (
    <div className="Signin">
      <h1 className="title">JOURNEY VISUALIZER</h1>
      <Container component="main" maxWidth="xs" className="signinContainer">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="googleLogo"></div>
          <Typography component="h1" variant="h4">
            Sign in
        </Typography>
          <Typography component="h1" variant="h6">
            with your Google Account
        </Typography>
          <div className={classes.form} noValidate>
            <Button
              href={BASE_URL + "auth/google/"}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;




