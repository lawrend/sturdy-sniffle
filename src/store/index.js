import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';


import {rootReducer} from './reducers/index.js';
import thunk from 'redux-thunk';

const store=createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;
