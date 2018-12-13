id = 0;
const firstState = {zipCode: ''}

export default function manageZipCode(state = firstState, action) {
  switch (action.type) {
    case 'CHANGE_ZIP_CODE':
      id = id+1;
      const zipCode = Object.assign({}, action.zipCode, { id: id });
      return { zipCode: state.zipCode }
    default:
      return state;

  }
};
