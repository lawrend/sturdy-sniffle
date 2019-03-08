// import Router, Provider, BrowserHistory, and App
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import BrowserHistory from 'history/createBrowserHistory';
import 'semantic-ui-css/semantic.min.css';
import store from './store/index.js'
import App from './App';

const history = BrowserHistory();


ReactDOM.render(
  <Provider store= {store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
