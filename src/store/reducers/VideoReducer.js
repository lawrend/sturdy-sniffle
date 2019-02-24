const initialState = {videos: [], selected_video: null};

export default function manageVideoSearch (state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOS':
      return {...state, videos: action.payload.videos, selected_video: action.payload.selectedVideo}
    case 'SET_SELECTED_VIDEO':
      return {...state, selected_video: action.payload, }
    default:
      return state
  }
}
