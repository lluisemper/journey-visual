import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StepMaker from './components/StepMaker/StepMaker';
import Review from './components/Review/Review';
import Login from './components/Login/Login';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StepMaker></StepMaker>
          </Route>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;