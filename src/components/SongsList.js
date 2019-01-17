import React, { Component } from 'react';
import SongItem from './SongItem.js';


const songContents = (songs) => {
  return songs.map(song =>
    <SongItem band={song.artists[0].name} key={song.id} albumType={song.album.album_type} albumName={song.name} />
  )
}
class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;
    let newSongs = [];
    console.log(Array.isArray(allSongs))

    // const songContents = function() {allSongs.forEach(function(k,i){
    //   let id = allSongs[i].id;
    //   let type = allSongs[i].album.album_type;
    //   let name = allSongs[i].name;
    //   let band = allSongs[i].artists[0].name;
    //   console.log("type is ", type, "name is ", name)
    //   let newSong = <SongItem band={band} key={id} albumType={type} albumName={name} />
    //   newSongs.push(newSong)
    // }
    // )
    //   return newSongs;
    // }

    return (
      <div className="Song-List">
        {songContents(this.props.songs)}
      </div>
      );
  }
};

export default SongsList

