// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { songs: {} }

// exports function which sets initial state and takes in the action passed and uses switch to determine the action to perform
// it then creates a new object to replace the current state, only changing what the action tells it to.
export default function manageSongSearch (state = initialState, action) {
  switch (action.type) {
    case 'SET_SONG_LIST':
      const newState = Object.assign({}, state, { songs: action.payload })
      return newState
    default:
      return state
  }
}
