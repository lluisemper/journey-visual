import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';

const App = () => {
console.log('------------',localStorage.getItem("cookie"));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
