import React from 'react';
import './Persona.css';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
  const [expanded, setExpanded] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} onClick={() => {
      setCurrentPersona(persona)
    }} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={<div>
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
        }
        title={persona.title}
      />
      
      <CardContent>
        {edit ?
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="title" variant="standard" onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }} />
            <IconButton aria-label="settings" onClick={() => {
              persona.title = title;
              ApiClient.updatePersona(persona);
              setTitle('');
              setEdit(!edit);
            }}>
              <DoneIcon />
            </IconButton>
          </form>
          :
          <Typography variant="body2" color="textSecondary" component="p">
            {persona.title}
          </Typography>}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Extra information</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
  
        </CardContent>
      </Collapse>
    </Card >
  );
}

const mapDispatchToProps = {
  setCurrentPersona: uiStateActions.setCurrentPersona,
  
}

export default connect(
  null,
  mapDispatchToProps
)(Persona);
