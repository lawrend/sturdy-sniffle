// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { chartWeek: "", numberOne: {title: "", artist: ""}, billboardDOM: "" };

// exports function which sets initial state and takes in the action passed and uses switch to determine the action to perform
// it then creates a new object to replace the current state, only changing what the action tells it to.
// Object assign not usually used anymore
export default function manageBillboardSearch (state = initialState, action) {
  switch (action.type) {
    case 'SET_CHART_WEEK':
      return {...state, chartWeek: action.payload}
    case 'SET_NUMBER_ONE':
      return {...state, numberOne: {title: action.payload.title, artist: action.payload.artist}}
    case 'SET_BILLBOARD_DOM':
      return {...state, billboardDOM: action.payload}
    default:
      return state
  }
}
