import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Axios from 'axios'
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Members from './pages/Members';
import { AuthContext, AuthProvider } from './AuthContext'


function App() {

  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={props => <Home {...props} />}
        />
        <Route
          exact path="/login"
          render={props => <Login {...props} />}
        />
        <Route
          exact path="/signup"
          render={props => <Signup {...props} />}
        />
        <Route
          exact path="/members"
          render={props => <Members {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
};
