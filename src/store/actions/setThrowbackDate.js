export const SET_THROWBACK_DATE = 'SET_THROWBACK_DATE';

const setDate = (dateInfo) => ({
  type: SET_THROWBACK_DATE,
  payload: dateInfo,
})

export const setThrowbackDate = (year, month, day) => (dispatch, getState) => {

}
