import React, {Component} from 'react';
import { Item } from 'semantic-ui-react';
import YouTube from 'react-youtube';

class VideoItem extends Component {
  render(){

    console.log("video Id: ", this.props.video.id.videoId)
    const source = this.props.video.id.videoId;
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    }
    return(
      <div className="youtube-wrapper">
        <div className="youtube">
          <YouTube
            videoId={source}
            opts={opts}
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
// <Item >
//   <Item.Image size='medium' src={video.snippet.thumbnails.medium.url} />
//   <Item.Content>
//     <Item.Header as='a'>{video.snippet.title}</Item.Header>
//     <Item.Meta>Meta</Item.Meta>
//     <Item.Description>{video.snippet.description}</Item.Description>
//     <Item.Extra>Additional content</Item.Extra>
//   </Item.Content>
// </Item>

