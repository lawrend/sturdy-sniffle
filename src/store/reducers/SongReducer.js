const initialState = {songTitle: '', bandName: '', albumName: ''}

export default function manageSongSearch (state = initialState, action) {
  switch (action.type) {
    case 'SONG_SEARCH':
      const newState = Object.assign({}, state, { songTitle: action.payload.songTitle, bandName: action.payload.bandName, albumName: action.payload.albumName })
      return newState
    default:
      return state
  }
}
