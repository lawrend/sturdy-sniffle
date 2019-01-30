// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { songs: [], searchTerm: "" }

// exports function which sets initial state and takes in the action passed and uses switch to determine the action to perform
// it then creates a new object to replace the current state, only changing what the action tells it to.
// Object assign not usually used anymore
export default function manageSongSearch (state = initialState, action) {
  switch (action.type) {
    case 'SET_SONG_LIST':
      return {...state, songs: action.payload}
      // const newSongsState = Object.assign({}, state, { songs: action.payload })
      // return newSongsState
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.payload}
      // const newSearchTermState = Object.assign({}, state, {searchTerm: action.payload})
      // return newSearchTermState
    default:
      return state
  }
}
