import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import GithubUsers from './githubUsers';
import GithubUser from './users/[user]';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageTemplate from './components/templates/pageTemplate';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <GithubUsers />
        </Route>
        <Route path="/users/:username">
          <GithubUser />
        </Route>
        <Route path="*">
          <PageTemplate><h1>Error</h1></PageTemplate>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
