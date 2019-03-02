export const SET_SELECTED_VIDEO = "SET_SELECTED_VIDEO";

const setVideo = video => ({
  type: SET_SELECTED_VIDEO,
  payload: video,
})


export const setSelectedVideo = video => dispatch => {
  dispatch(setVideo(video))
};



