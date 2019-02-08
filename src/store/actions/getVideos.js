//THIS IS JACKED RIGHT NOW//

import React, { Component } from "react";
import { YT_KEY } from '../../config.js';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
// import VideoList from "./components/video_list";
// import VideoDetail from "./components/video_detail";

export const GET_VIDEOS = "GET_VIDEOS";

const videoGetter = videoList => ({
  type: GET_VIDEOS,
  payload: videoList,
})


export const videoGetter = id => dispatch => {}

class getVideos extends Component {
  constructor(props) {
    super(props);

    this.videoSearch("DJ Shadow");
  }

  videoSearch(term) {
    YTSearch({ key: YT_KEY, term: term }, videos => {
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

///////////////
///////////////


//export const GET_VIDEOS = "GET_VIDEOS";

// const videoGetter = videoList => ({
  // type: GET_VIDEOS,
  // payload: videoList,
// })
// <SearchBar onSearchTermChange={videoSearch} />
// <VideoDetail video={this.state.selectedVideo} />
// <VideoList
//   onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
//   videos={this.state.videos}
// />


let request = require('request');
let client_id = CLIENT_ID_NO_ENCODE;
let client_secret = CLIENT_SECRET_NO_ENCODE;


export const videoGetter = id => dispatch => {
  // application requests authorization
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      let token = body.access_token;
      let options = {
        url: `https://api.spotify.com/v1/audio-features/${id}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log("body: ", body);
        dispatch(songSelector(body))
      })
    }
  })
  ;
}


