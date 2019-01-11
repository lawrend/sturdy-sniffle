import React, {Component} from 'react';
import SongsList from '../components/SongsList.js';
import {songSearch} from '../store/actions/songSearch.js'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  songs: state.songs.songs,

})
const mapDispatchToProps = dispatch => ({
  songSearch(songTitle){
  return dispatch(songSearch(songTitle))
  }
})

class SongSearchBar extends Component {
  render() {
    console.log(this.props.songs)
    return (
      <div>
        <form>
          <input type="text" />
          </form>
      <button onClick={e => this.props.songSearch("yesterday")}>click me, bro</button>
      <SongsList />
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSearchBar);
