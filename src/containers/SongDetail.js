import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';

const mapStateToProps = state => ({
  selectedTrackDetails: state.songs.selectedTrackDetails,
})

class SongDetail extends Component {
  render() {
    console.log("song detail props: ", this.props.selectedTrackDetails)
    return (
      <div className="Song-Detail">
        <Header as='h3'>
          this is the song detail
        </Header>
        The song has a danceability of {this.props.selectedTrackDetails.danceability}
        <Divider />
      </div>
      )
  }
}

export default connect(mapStateToProps)(SongDetail);
