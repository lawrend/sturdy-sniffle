import React, {Component} from 'react';
import YouTube from 'react-youtube';

class VideoItem extends Component {
  render(){

    console.log("video Id: ", this.props.video.id.videoId)
    const source = this.props.video.id.videoId;
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     autoplay: 0,
    //   },
    // }
    return(
      <div className="youtube-wrapper">
        <div className="youtube">
          <YouTube
            videoId={source}
            onReady={this._onReady}
          />
            </div>
          </div>
          )
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default VideoItem;

