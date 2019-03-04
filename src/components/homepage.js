import React from 'react';
import SongOfTheDayContainer from '../containers/SongOfTheDayContainer.js';
import { Divider } from 'semantic-ui-react';

export default props => (
  <div>
    <h1>Want to know what Song was #1?</h1>
    <SongOfTheDayContainer />
    <Divider/>
  </div>
)
