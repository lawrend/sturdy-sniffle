import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoItem from './VideoItem';
import { Item } from 'semantic-ui-react';

const mapStateToProps = state => ({
  videos: state.videos.videos,
})


class VideosList extends Component {

  render() {

    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
          video={video}
        />
        );
    });

    return (
      <Item.Group divided>
        {renderedList}
      </Item.Group>
      )
  }
}

export default connect(mapStateToProps)(VideosList);

// <div className="ui relaxed divided list">
//       {renderedList}
//     </div>


