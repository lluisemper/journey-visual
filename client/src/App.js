import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from "react-router-dom";
import Signin from './components/Signin/Signin';
import JourneyList from './components/JourneyList/JourneyList';
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer';
import PersonaList from './components/PersonaList/PersonaList';
import Analysis from './components/Analysis/Analysis';

const SideBar = () => {
  let location = useLocation();
  if (location.pathname !== '/') {
    return <ResponsiveDrawer />
  }
  else {
    return null;
  }
}
const App = () => {

  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Signin} />
          {/* <Route exact path="/Home" component={Main} /> */}
          <Route exact path="/Journeys" component={JourneyList} />
          <Route exact path="/Personas" component={PersonaList} />
          <Route exact path="/Analysis" component={Analysis} />
         
        </Switch>
      </Router>
    </div>
  );
}


export default App;
