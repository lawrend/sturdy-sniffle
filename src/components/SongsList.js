import React, { Component } from 'react';
import SongItem from './SongItem.js';
import { Card, Divider } from 'semantic-ui-react';

const songContents = (songs, props) => {
  return songs.map(song =>
    <SongItem albumName={song.album.name} band={song.artists[0].name} image={song.album.images[1][['url']]} key={song.id} albumType={song.album.album_type} songName={song.name} id={song.id} setSelectedTrack={props.setSelectedTrack} getTrackAnalysis={props.getTrackAnalysis} getVideos={props.getVideos} />)
};

class SongsList extends Component {
  render() {
    return (
      <div>
        <Divider hidden />
        <Card.Group stackable>
          {songContents(this.props.songs, this.props)}
        </Card.Group>
      </div>
      );
  }
};

export default SongsList

