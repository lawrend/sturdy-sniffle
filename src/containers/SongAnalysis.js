import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selectedTrackAnalysis: state.songs.selectedTrackAnalysis,
})

class SongAnalysis extends Component {
  translateKey(keyValue) {
    switch(keyValue) {
      case 0:
        return 'C'
      case 1:
        return 'C#'
      case 2:
        return 'D'
      case 3:
        return 'E flat'
      case 4:
        return 'E'
      case 5:
        return 'F'
      case 6:
        return 'F#'
      case 7:
        return 'G'
      case 8:
        return 'G#'
      case 9:
        return 'A'
      case 10:
        return 'A#'
      case 11:
        return 'B'
      default:
        return 'who knows'
    }
  }
  render() {
    console.log("song analysis props: ", this.props.selectedTrackAnalysis)
    return (
      <div className="Song-Analysis">
        <p>this is the song Analysis</p>
        <p>This song is in the key of {this.translateKey(this.props.selectedTrackAnalysis.key)}</p>
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongAnalysis);
