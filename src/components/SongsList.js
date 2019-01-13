import React from 'react';
import SongItem from './SongItem.js';

export default props => (
  <div className="Songs-List">
    Here are the songs...
    <SongItem song={props.songs[0]} />
  </div>
  )

