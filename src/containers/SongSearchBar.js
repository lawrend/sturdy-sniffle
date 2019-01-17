import React, {Component} from 'react';
import SongsList from '../components/SongsList.js';
import {songSearch} from '../store/actions/songSearch.js'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  songs: state.songs.songs,
  searchTerm: state.searchTerm,

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
        <form className="searchForm">
          <input type="text" id="songSearchField" value={this.props.searchTerm}/>
        </form>
        <button type="submit" onSubmit={e => this.props.songSearch(document.getElementById("songSearchField").value)}>click me, bro</button>
        <SongsList songs={this.props.songs}/>
      </div>
      )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSearchBar);
