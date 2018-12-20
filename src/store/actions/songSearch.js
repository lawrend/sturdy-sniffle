const AUTH_TOKEN = "Bearer BQC-k80Tu2UMytWpLSHUjlmImJ61NELsPs04PlcXAmnFREFYmmX3chW1NPnUH-VOwT1vK8hnJztNBuaiFSdX3P9xIDzM68EVIz4rFuktbhqLrEmrSjIad3RdhYv-7c7huiO7Yqd7WDHVQocF";

const ROOT_URL = "https://api.spotify.com/v1/search?"

export const SET_SONG_LIST = "SET_SONG_LIST";
const setSongList = songs => ({
  type: SET_SONG_LIST,
  payload: songs
})



export const songSearch = songTitle => dispatch => {
  const url = `${ROOT_URL}&q=${songTitle}&type=track`;
  fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": AUTH_TOKEN,
    }
  })
    .then(response =>response.json())
    .then(songs => dispatch(setSongList(songs)))
}



