import React, {Component} from 'react';
import VideosList from '../components/VideosList.js';
import VideoDetail from '../components/VideoDetail.js';
import SongsList from '../components/SongsList.js';
import {songSearch} from '../store/actions/songSearch.js';
import {setSelectedTrack} from '../store/actions/setSelectedTrack.js';
import {getTrackAnalysis} from '../store/actions/getTrackAnalysis.js';
import {getVideos} from '../store/actions/getVideos.js';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

//subscribes to state; will update upon state change
const mapStateToProps = state => ({
  songs: state.songs.songs,
})

//subscribes to the action(s); dispatch the action to the reducer
const mapDispatchToProps = dispatch => ({
  songSearcher(songTitle){
    return dispatch(songSearch(songTitle))
  },
  setSelectedTrack(id){
    return dispatch(setSelectedTrack(id))
  },
  getTrackAnalysis(id){
    return dispatch(getTrackAnalysis(id))
  },
  getVideos(songTitle){
    return dispatch(getVideos(songTitle))
  },
})

class SongSearchBar extends Component {
    searchSong = (event) => {
    event.preventDefault();
    const songName = event.target.songSearchField.value;
    this.props.songSearcher(songName)
  }

  render() {
    return (
       <div className="ui container">
         <form onSubmit={this.searchSong}>
           <input type="text" name="songSearchField" />
           <p>
             <button type="submit">click me, bro</button>
           </p>
           </form>
           <div className="ui grid">
             <div className="ui row">
           <div className="eleven wide column">
         <SongsList songs={this.props.songs} setSelectedTrack={this.props.setSelectedTrack} getTrackAnalysis={this.props.getTrackAnalysis} getVideos={this.props.getVideos}/>
       </div>
     </div>
   </div>
 </div>
       )
  }
}

//connect is connecting with the store
export default connect(mapStateToProps, mapDispatchToProps)(SongSearchBar);
