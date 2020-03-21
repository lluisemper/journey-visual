import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/Home" component={Main} />
          <Route exact path="/Journeys" component={Main} />
          <Route exact path="/Personas" component={Main} />
          <Route exact path="/Analysis" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
