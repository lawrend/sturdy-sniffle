// CREATES STORE: importing the devtools, createStore, applyMiddleware, rootReducer, and thunk--all to create the store
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/index.js';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const store=createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, createLogger({collapsed: true}))

    // , window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;
