import React, {Component} from 'react';
import { Item } from 'semantic-ui-react';

class VideoItem extends Component {
  render(){

  console.log("video Id: ", this.props.video.id.videoId)
    return(
<div className="youtube-wrapper">
      <div className="youtube">
        <iframe
          className="youtube-frame"
          src={`https://www.youtube.com/embed/${this.props.video.id.videoId}?`}
          allowFullScreen
        />
    </div>
  </div>
  )
}}

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

