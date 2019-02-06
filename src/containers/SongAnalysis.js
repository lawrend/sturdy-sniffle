import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selectedTrackAnalysis: state.songs.selectedTrackAnalysis,
})

class SongAnalysis extends Component {
  render() {
    {console.log("SongAnalysis props: ", this.props)
    }
    return (
      <div className="Song-Analysis">
        <p>this is the song Analysis</p>
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongAnalysis);
