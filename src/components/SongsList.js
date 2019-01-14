import React, { Component } from 'react';
import SongItem from './SongItem.js';


class SongsList extends Component {
  render() {
    const allSongs = this.props.songs;

    Object.keys(allSongs).forEach(function(k,i){
        let type = allSongs[k].album.album_type;
        let name = allSongs[k].name;
      console.log("type is ", type, "name is ", name)
         let newSong = <SongItem albumType={type} albumName={name} />

        }
      )

    // let itemMaker = function() {
    // for(const key in allSongs){
    //   let albumType = allSongs[key].album.album_type;
    //   let albumName = allSongs[key].name;
    //   return <SongItem albumType={albumType} albumName={albumName} />
    // }
// }
    // const collection = allSongs.map(song => (
    // <SongItem key={song.id} {...song} />
    // ));

    return (
      <div className="Song-List">
           </div>
      );
  }
};

export default SongsList

//
// { allSongs.map(song => (
        // <SongItem key={song.id} {...song} />
        // ))
        // }

