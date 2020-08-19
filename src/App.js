import React from 'react';
import './App.css';
import Login from './login/login';
import Report from './report/report';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './404/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/report" component={Report} />
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router >
  );
}

export default App;