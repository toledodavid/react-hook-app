import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';



const AppRouter = () => {
  return(
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/about" component={AboutScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;