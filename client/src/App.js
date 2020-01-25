import React, { useContext } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Members from './pages/Members';
import Axios from 'axios'

function App() {

  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log("App auth: ", isAuth)

  const logout = async () => {
    Axios.get('/api/auth/logout')
      .then(response => {
        console.log("logout response: ", response)
        setIsAuth(false)
      })
      .catch(err => console.log(err));
  }

  return (
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

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
};
