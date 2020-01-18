import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {
  return (
  
     <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> */}
          {/* <Route component={NoMatch} /> */}

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
        </Switch>
    </Router>
  );
}

export default App;
