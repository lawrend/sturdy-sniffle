const initialState = { songs: {} }

export default function manageSongSearch (state = initialState, action) {
  switch (action.type) {
    case 'SET_SONG_LIST':
      const newState = Object.assign({}, state, { songs: action.payload })
      return newState
    default:
      return state
  }
}
