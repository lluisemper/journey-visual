import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StepMaker from './components/StepMaker/StepMaker';
import Review from './components/Review/Review';
import StepList from './components/StepList/StepList';

const App = () => {

  const [journey, setJourney] = useState([]);

  useEffect(() => {
    setJourney([
      { step: 'wants a cup of coffee', emotion: 'happy', score: 4 },
      { step: 'empty coffee bin', emotion: 'bored', score: 2 },
      { step: 'make coffee', emotion: 'neutral', score: 3 },
      { step: 'drink coffee', emotion: 'happy', score: 5 }]);
  }, []);

  return (
    <div className="App">
      <StepList journey={journey} />
      <Router>
        <Switch>
          <Route exact path="/">
            <StepMaker></StepMaker>
          </Route>
          <Route exact path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
