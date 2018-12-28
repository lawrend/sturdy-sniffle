// COMBINES REDUCERS: imports combineReducers and all reducers to be combined
import { combineReducers } from 'redux';
import SongReducer from './SongReducer.js';

export const rootReducer = combineReducers({
  songs: SongReducer
}
);


