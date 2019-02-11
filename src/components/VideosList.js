import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoItem from './VideoItem';

const mapStateToProps = state => ({
  videos: state.videos.videos,
})


class VideosList extends Component {

  render() {
const renderedList = this.props.videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
      />
      );
  });


    return <div className="ui relaxed divided list">
      {renderedList}
    </div>

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

export default connect(mapStateToProps)(VideosList);
