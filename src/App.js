import React from 'react';
import './App.css';
import Login from './login/login';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import NotFoundPage from './404/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;