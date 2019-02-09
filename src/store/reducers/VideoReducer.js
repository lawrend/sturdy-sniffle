const initialState = {videos: [], };

export default function manageVideoSearch (state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOS':
      return {...state, videos: action.payload, }
    default:
      return state
  }
}
