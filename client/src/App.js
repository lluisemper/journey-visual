import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import PrivateRoute from './privateRoute';

const App = () => {
console.log('------------',localStorage.getItem("cookie"));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
