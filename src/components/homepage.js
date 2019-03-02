import React from 'react';
import SongOfTheDayContainer from '../containers/SongOfTheDayContainer.js';
import { Divider } from 'semantic-ui-react';

export default props => (
  <div>
    <h1>Want to know what Song was <em>HOT LIKE DAT</em> at some <em>TIME</em> in the <em>PAST???</em></h1>
    <SongOfTheDayContainer />
    <Divider/>
  </div>
)
