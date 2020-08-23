import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './404/404';
import Menu from './menu/menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router >
  );
}

export default App;