
const firstState = { zipCode: '', ex1: '', ex2: '' }
export default function manageZipCode(state = firstState, action) {
  switch (action.type) {
    case 'CHANGE_ZIP_CODE':
      const newState = Object.assign({}, state, { zipCode: action.payload });
      return newState;
    default:
      return state;

  }
};
