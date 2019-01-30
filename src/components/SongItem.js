import React from 'react';
import { Link } from 'react-router-dom';
import SongDetail from '../containers/SongDetail.js'

export default props => (
  <div className="Song-Item">
    <ul>
      <li>Album/Single: {props.albumType}</li>
      <li>Artist Name: {props.band}</li>
      <li>Album Name: {props.albumName}</li>
      <li><Link to="/songdetail" >Song Name: {props.songName}</Link></li>
    </ul>
  </div>
  )

