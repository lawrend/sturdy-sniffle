import React, { Component } from 'react';
import SongItem from './SongItem.js';

console.log("the props of the SongsList: ")
const songContents = (songs, setSelectedTrack) => {
  return songs.map(song =>
    <SongItem albumName={song.album.name} band={song.artists[0].name} key={song.id} albumType={song.album.album_type} songName={song.name} id={song.id} setSelectedTrack={setSelectedTrack} />)
};

class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;
    return (
      <div className="Song-List">
        {songContents(this.props.songs, this.props.setSelectedTrack)}
      </div>
      );
  }
};

export default SongsList

