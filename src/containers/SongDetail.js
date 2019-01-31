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
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongDetail);
