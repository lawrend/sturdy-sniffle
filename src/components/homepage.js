import React from 'react';
import SongOfTheDayContainer from '../containers/SongOfTheDayContainer.js';
import { Divider } from 'semantic-ui-react';

export default props => (
  <div>
    <h1>What Song was HOT LIKE DAT at some TIME in the PAST???</h1>
    <SongOfTheDayContainer />
    <Divider/>
  </div>
)
