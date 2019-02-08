// COMBINES REDUCERS: imports combineReducers and all reducers to be combined
import { combineReducers } from 'redux';
import SongReducer from './SongReducer.js';
import VideoReducer from './VideoReducer.js';

export const rootReducer = combineReducers({
  songs: SongReducer,
  videos: VideoReducer,
}
);


