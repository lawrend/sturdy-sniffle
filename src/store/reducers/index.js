import { combineReducers } from 'redux';
import SongReducer from './SongReducer.js';

export const rootReducer = combineReducers({
  songs: SongReducer
}
);


