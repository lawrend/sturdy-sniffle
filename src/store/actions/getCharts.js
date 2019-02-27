//-------------------------------//
//set state chartWeek
export const SET_CHART_WEEK = 'SET_CHART_WEEK';

const setCharts = submittedDate => ({
  type: SET_CHART_WEEK,
  payload: {
    chartWeek: submittedDate
  },
})
//-------------------------------//
//set state numberOne { title: , artist: }
export const SET_NUMBER_ONE = 'SET_NUMBER_ONE';

const setOne = numberOne => ({
  type: SET_NUMBER_ONE,
  payload: numberOne,

})

//-------------------------------//
export const setNumberOne = textDOM => dispatch => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(textDOM, 'text/html');
  const namen = doc.getElementsByClassName("chart-number-one__title");
  console.log(namen, namen[0])
  const dispNamen = {title: namen, artist: "checkup"};
  dispatch(setOne(dispNamen))
}
//-------------------------------//
//set state billboardDOM:
export const SET_BILLBOARD_DOM = 'SET_BILLBOARD_DOM';

const setDOM = parsedDOM => ({
  type: SET_BILLBOARD_DOM,
  payload:
  parsedDOM

})
//-------------------------------//


export const getCharts = submittedDate => dispatch => {
  const getDOM = submittedDate => {
    const response = fetch(`https://www.billboard.com/charts/billboard-200/${submittedDate}`)
      .then(results => {
        return results.text();
      })
      .then(body => {
        dispatch(setDOM(body))
        const parser = new DOMParser();
        const doc = parser.parseFromString(body, 'text/html');
        const namen = doc.getElementsByClassName("chart-number-one__title")[0].innerText;
        const arten = doc.getElementsByClassName("chart-number-one__artist")[0].innerText
        console.log(namen)
        const dispNamen = {title: namen, artist: arten};
        dispatch(setOne(dispNamen))
      },
      )}
  getDOM(submittedDate)
}




