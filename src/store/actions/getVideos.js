import VideosList from '../../components/VideosList.js';
import VideoDetail from '../../components/VideoDetail.js';
import youtube from '../../apis/youtube.js';

export const GET_VIDEOS = "GET_VIDEOS";

const getVideoList = videoList => ({
  type: GET_VIDEOS,
  payload: {
    videos: videoList,
    selectedVideo: videoList[0]
  },
})


export const getVideos = term => dispatch => {
  const reqFromYouTube = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    let vids = response.data.items;
    dispatch(getVideoList(vids))
    let reply = {
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    };
    console.log("this is the reply from yt call: ", reply)
  };
  reqFromYouTube(term)



  // const onVideoSelect = video => {
  //   console.log( video );
  // };
}

