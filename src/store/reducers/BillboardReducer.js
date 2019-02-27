// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { chartWeek: "", numberOne: {title: "", artist: ""}, billboardDOM: "" , throwbackDate: {year: undefined, month: undefined, day: undefined, dateString: ""}};

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
    case 'SET_THROWBACK_DATE':
      return {...state, throwbackDate: { year: action.payload.year, month: action.payload.month, day: action.payload.day }
      }
    default:
      return state
  }
}
