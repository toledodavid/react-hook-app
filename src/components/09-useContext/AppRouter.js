import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavBar from './NavBar';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';



const AppRouter = () => {
  return(
    <Router>
      <div>

        <NavBar />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/about" component={AboutScreen} />
          
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;