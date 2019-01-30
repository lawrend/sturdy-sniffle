import React, { Component } from 'react';
import SongItem from './SongItem.js';


const songContents = (songs) => {
  return songs.map(song =>
    <SongItem albumName={song.album.name} band={song.artists[0].name} key={song.id} albumType={song.album.album_type} songName={song.name} />
  )
}
class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;
    let newSongs = [];
    console.log(Array.isArray(allSongs))

    return (
      <div className="Song-List">
        {songContents(this.props.songs)}
      </div>
      );
  }
};

export default SongsList

