import React, {Component} from 'react';
import SongsList from '../components/SongsList.js';
import {songSearch} from '../store/actions/songSearch.js'
import { connect } from 'react-redux';

//subscribes to state; will update upon state change
const mapStateToProps = state => ({
  songs: state.songs.songs,
})

//subscribes to the action(s); dispatch the action to the reducer
const mapDispatchToProps = dispatch => ({

  dog(songTitle){
    return dispatch(songSearch(songTitle))
  }
})

class SongSearchBar extends Component {
  //binds the function to SongSearchBar
  // constructor(props) {
  //   super(props);
  //   this.searchSong = this.searchSong.bind(this);
  // }
  //
  //fat arrow implicitly binds the this
  searchSong = (event) => {
    event.preventDefault();
    const songName = event.target.songSearchField.value;
    this.props.dog(songName)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchSong}>
          <input type="text" name="songSearchField" />
          <p>
            <button type="submit">click me, bro</button>
          </p>
        </form>
        <SongsList songs={this.props.songs}/>
      </div>
      )
  }
}

//connect is connecting with the store
export default connect(mapStateToProps, mapDispatchToProps)(SongSearchBar);
