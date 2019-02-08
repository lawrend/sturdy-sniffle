const initialState = {videos: [], selectedVideo: ""};

export default function manageVideoSearch (state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOS':
      return {...state, videos: action.payload.videos, selectedVideo: action.payload.selectedVideo}
    default:
      return state
  }
}
