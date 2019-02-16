import React from 'react';
import { Header, Image, Item } from 'semantic-ui-react';

const VideoItem = ({video}) => {
  return (
    <div>
      <Item.Image size='medium' src={video.snippet.thumbnails.medium.url} />
      <Item.Content>
        <Item.Header as='a'>{video.snippet.title}</Item.Header>
        <Item.Meta>Meta</Item.Meta>
        <Item.Description>Description</Item.Description>
        <Item.Extra>Additional content</Item.Extra>
      </Item.Content>
    </div>
    )
};

export default VideoItem;
// <div onClick={() => onVideoSelect(video)} className="video-item item">
//       <img
//         alt={video.snippet.title}
//         className="ui image"
//         src={video.snippet.thumbnails.medium.url}
//       />
//       <div className="content">
//         <div className="header">{video.snippet.title}</div>
//       </div>
//     </div>
//
// const VideoItem = ({ video, onVideoSelect }) => {
//   return (
//     <div>
//       <Item.Image size='medium' src={video.snippet.thumbnails.medium.url} />
//         <Item.Content>
//           <Item.Header as='a'>{video.snippet.title}</Item.Header>
//           <Item.Meta>Meta</Item.Meta>
//           <Item.Description>Description</Item.Description>
//           <Item.Extra>Additional content</Item.Extra>
//         </Item.Content>
//     </div>
//       );

