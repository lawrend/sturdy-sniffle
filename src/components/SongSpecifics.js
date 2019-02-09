import React from 'react';
import SongAnalysis from '../containers/SongAnalysis.js';
import SongDetail from '../containers/SongDetail.js';
import VideosList from '../components/VideosList.js';

export default props => (
  <div>
    <SongAnalysis />
    <SongDetail />
    <VideosList videos={props.videos}/>
  </div>
)
