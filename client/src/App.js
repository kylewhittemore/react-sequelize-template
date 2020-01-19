import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios'
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Members from './pages/Members';


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    Axios.get('/api/auth/user_data')
    .then(response => {
        console.log('user_data: ', response.data)
        // setUser(response.data)
        // setIsAuth(true)
        if (response.data.email) {
          console.log("data: ", response.data)
          setIsAuth(true)
        }
        else {
          console.log("no response data")
        }
    })
  }, [])

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
            render={props => <Login {...props} isAuth={isAuth} />} 
          />
          <Route 
            exact path="/signup" 
            render={props => <Signup {...props} />}
          />
          <Route 
            exact path="/members" 
            render={props => <Members {...props} isAuth={isAuth} />}
          />
        </Switch>
    </Router>
  );
}

export default App;
