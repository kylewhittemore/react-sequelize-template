import React, { useContext } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Members from './pages/Members';
import Axios from 'axios'

// Even though this is the App.js file, in the end we are not exactly exporting
// the App component.  We actually set up the app component to implement our react
// router, but in the end we export App wrapped in the context provider 
function App() {

  // Here we subscribe the authentication context using the useContext hook
  // we use isAuth to determine whether the user is logged in, and setIsAuth 
  // to change their status on logout.
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log("App auth: ", isAuth)

  // Logout makes a get request to our backend, where the passport-provided
  // logout function is called.  we then set isAuth to false so that the user
  // will no longer be able to view restricted pages
  const logout = async () => {
    Axios.get('/api/auth/logout')
      .then(response => {
        console.log("logout response: ", response)
        setIsAuth(false)
      })
      .catch(err => console.log(err));
  }

  return (
    // when setting up the router, we pass the spread props to to each
    // component so that they can access props.history.  we use 
    // props.history.push('path here) to send a user to a new page, but
    // in a way that still allows them to use the forward and back buttons
    // When the user logs out however, we redirect so that they cannot
    // press the back button to re-access restricted content.  
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={props => <Home {...props} logout={logout} />}
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
          render={props => <Members {...props} logout={logout} />}
        />
      </Switch>
    </Router>
  );
}

// Here we export the final product of our app/context configuration, and
// even though it is unnamed here, it will be imported as App in index.js
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
};
