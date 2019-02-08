import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SongItem extends Component{

  clickForActions() {

    this.props.getTrackAnalysis(this.props.id);
    this.props.setSelectedTrack(this.props.id);
  }

  render() {
    return (
      <div className="Song-Item">
        <ul>
          <li>Album/Single: {this.props.albumType}</li>
          <li>Artist Name: {this.props.band}</li>
          <li>Album Name: {this.props.albumName}</li>
          <li><Link to={`/songspecifics/${this.props.id}/`} onClick={() => this.clickForActions()} >Song Name: {this.props.songName}</Link></li>
        </ul>
      </div>
      )
}

}
