import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';

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
        <Header as='h2'>
          this is the song Analysis
        </Header>
        This song is in the key of {this.translateKey(this.props.selectedTrackAnalysis.key)}
        <Divider />
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongAnalysis);
