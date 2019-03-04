import moment from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 6,
  }
}
)

export const SET_THROWBACK_DATE = 'SET_THROWBACK_DATE';

const setDate = dateInfo => ({
  type: SET_THROWBACK_DATE,
  payload: dateInfo,
})

export const setThrowbackFromDropdown = date => dispatch => {
  dispatch(setDate(date))
}


export const setThrowbackDateFromDatePicker = date => dispatch => {
  dispatch(setDate(date))
}



