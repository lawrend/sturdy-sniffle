import React, { Component } from 'react';
import SongItem from './SongItem.js';


class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;
    let newSongs = [];
    const songContents = function() {Object.keys(allSongs).forEach(function(k,i){
      let id = allSongs[k].id;
      let type = allSongs[k].album.album_type;
      let name = allSongs[k].name;
      console.log("type is ", type, "name is ", name)
      let newSong = <SongItem id={id} albumType={type} albumName={name} />
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


