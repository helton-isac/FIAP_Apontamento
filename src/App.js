import React from 'react';
import './App.css';
import Login from './login/login';
import Report from './report/report';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './404/404';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/report" component={Report} />
        {/* <PrivateRoute path="/report">
          <Report />
        </PrivateRoute> */}
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;