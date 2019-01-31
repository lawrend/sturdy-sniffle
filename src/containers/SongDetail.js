import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selectedTrackDetails: state.songs.selectedTrackDetails,
})

class SongDetail extends Component {
  render() {
    {console.log("SongDetail props: ", this.props)
    }
    return (
      <div className="Song-Detail">
        <p>this is the song detail</p>
        <p>The song has a danceability of {this.props.selectedTrackDetails.danceability}</p>
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongDetail);
