import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SongDetail from '../containers/SongDetail.js'

export default class SongItem extends Component{
  getSongDetails = () => {
    this.props.setSelectedTrack(this.props.id)
  }

  render() {
    return (
      <div className="Song-Item">
        <ul>
          <li>Album/Single: {this.props.albumType}</li>
          <li>Artist Name: {this.props.band}</li>
          <li>Album Name: {this.props.albumName}</li>
          <li><Link to={`/songdetail/${this.props.id}/`} onClick={this.getSongDetails} >Song Name: {this.props.songName}</Link></li>
        </ul>
      </div>
      )
}

}
