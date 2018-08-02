import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'

// Routes
import Home from './views/Home/'
import Login from './views/Login/'

function isLoggedin(nextState, replace) {
  if (!localStorage.token) {
    replace('/login');
  }
}
export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full} onEnter={isLoggedin}>
      <IndexRoute component={Home} />
      <Route path="home" name="Home" component={Home} />
    </Route>
      <Route path="login" name="Login" component={Login} />
  </Router>
);
