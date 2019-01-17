import React, { Component } from 'react';
import SongItem from './SongItem.js';


class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;
    let newSongs = [];
    console.log(typeof allSongs)

    const songContents = function() {Object.keys(allSongs).forEach(function(k,i){
      let id = allSongs[k].id;
      let type = allSongs[k].album.album_type;
      let name = allSongs[k].name;
      let band = allSongs[k].artists[0].name;
      console.log("type is ", type, "name is ", name)
      let newSong = <SongItem band={band} key={allSongs[k].id} id={id} albumType={type} albumName={name} />
      newSongs.push(newSong)
    }
    )
      return newSongs;
    }

    return (
      <div className="Song-List">
        {songContents()}
      </div>
      );
  }
};

export default SongsList

