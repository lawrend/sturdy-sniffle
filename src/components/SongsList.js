import React, { Component } from 'react';
import SongItem from './SongItem.js';

const songContents = (songs, props) => {
  return songs.map(song =>
    <SongItem albumName={song.album.name} band={song.artists[0].name} key={song.id} albumType={song.album.album_type} songName={song.name} id={song.id} setSelectedTrack={props.setSelectedTrack} getTrackAnalysis={props.getTrackAnalysis} />)
};

class SongsList extends Component {
  render() {
    return (
      <div className="Song-List">
        {songContents(this.props.songs, this.props)}
      </div>
      );
  }
};

export default SongsList

