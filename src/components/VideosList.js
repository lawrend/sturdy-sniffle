import React, {Component} from 'react';
import VideoItem from './VideoItem';


class VideosList extends Component {

  render() {
    return(
      <div className="Videos-List">
        {this.props.videos}
      </div>
      )
  }
}

// const renderedList = videos.map(video => {
//   return (
//     <VideoItem
//       key={video.id.videoId}
//       video={video}
//     />
// )});
//   return <div className="ui relaxed divided list">
//     {renderedList}
//   </div>
// const VideosList = ({ videos, onVideoSelect }) => {
//   const renderedList = videos.map(video => {
//     return (
//       <VideoItem
//         key={video.id.videoId}
//         onVideoSelect={onVideoSelect}
//         video={video}
//       />
//     );
//   });
// }

//   return <div className="ui relaxed divided list">{renderedList}</div>;
// };

export default VideosList;
