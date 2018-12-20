import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import BrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './store/reducers/index.js';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const history = BrowserHistory();

const store=createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  ));

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
