import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Signin.css';
import googleLogo from '../../assets/googleLogo.png';


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

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className="Signin">
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
              href="http://localhost:4000/auth/google/"
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




