// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { isLoading: false, chartWeek: "", numberOne: {title: "", artist: ""}, billboardDOM: "" , throwbackDate: ""};

// exports function which sets initial state and takes in the action passed and uses switch to determine the action to perform
// it then creates a new object to replace the current state, only changing what the action tells it to.
// Object assign not usually used anymore
export default function manageBillboardSearch (state = initialState, action) {
  switch (action.type) {
    case 'SET_CHART_WEEK':
      return {...state, chartWeek: action.payload}
    case 'SET_NUMBER_ONE':
      return {...state, numberOne: {title: action.payload.title, artist: action.payload.artist}, isLoading: false }
    case 'SET_BILLBOARD_DOM':
      return {...state, billboardDOM: action.payload}
    case 'SET_THROWBACK_DATE':
      return {...state, throwbackDate: action.payload}
    case 'SET_LOADING':
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}
