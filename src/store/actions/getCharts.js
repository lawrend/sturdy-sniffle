//-------------------------------//
//set state billboardDOM:
export const SET_BILLBOARD_DOM = 'SET_BILLBOARD_DOM';

const setDOM = textFile => ({
  type: SET_BILLBOARD_DOM,
  payload:
  textFile

})

export const getCharts = submittedDate => (dispatch, getState) => {
  const response = fetch(`https://www.billboard.com/charts/hot-100/${submittedDate}`)
    .then(results => {
      return results.text();
    })
    .then(body => {
      dispatch(setDOM(body))
    },
    ).then(() => {
      dispatch(setNumberOne(getState().charts.billboardDOM))
    })
};

//-------------------------------//
export const SET_NUMBER_ONE = 'SET_NUMBER_ONE';

const setOne = numberOne => ({
  type: SET_NUMBER_ONE,
  payload: numberOne,

})

export const setNumberOne = textDOM => dispatch => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(textDOM, 'text/html');
  const namen = doc.getElementsByClassName("chart-number-one__title")[0].innerText;
  const arten = doc.getElementsByClassName("chart-number-one__artist")[0].innerText;
  const dispNamen = {title: namen, artist: arten};
  dispatch(setOne(dispNamen))

}
//-------------------------------//
//set state chartWeek
// export const SET_CHART_WEEK = 'SET_CHART_WEEK';

// const setCharts = submittedDate => ({
//   type: SET_CHART_WEEK,
//   payload: {
//     chartWeek: submittedDate
//   },
// })
//-------------------------------//




