import { combineReducers } from 'redux';
import ZipCodeReducer from './ZipCode';

export const rootReducer = combineReducers({
  zipcode: ZipCodeReducer,
  // user: UserReducer
}
);


// Import this /store/index.js