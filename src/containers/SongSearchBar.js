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
        return (
      <div>
        <form>
          <input type="text" />
          </form>
      <button onClick={e => this.props.songSearch("yesterday")}>click me, bro</button>
      <SongsList songs={this.props.songs}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSearchBar);
