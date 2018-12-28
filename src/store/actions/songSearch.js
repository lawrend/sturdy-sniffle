// MIDDLEWARE TRIGGERED AND API CALL MADE: provide url and data for api call
//
// NOT the way to get/use an access token with spotify
// const ACCESS_TOKEN = fetch("https://accounts.spotify.com/api/token", {
//   method: "POST",
//   body: {
//     grant_type: "client_credentials",
//   },
//   headers: {
//     "Authorization": "Basic" + ":"
//   }
// })
//   .then(response => console.log(response))
//
//   client_id = "eab42e1c3f9140f69e2480b69608b0af"
//   client_secret = "dbe1d90886874f86aa42113ea6f674c3"

const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;

const TOKEN = fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  body: {
    grant_type: "client_credentials",
  },
  headers: {
    "Authorization": "Basic:" + CLIENT_ID + ":" + CLIENT_SECRET
  }
});


const ROOT_URL = "https://api.spotify.com/v1/search?"

export const SET_SONG_LIST = "SET_SONG_LIST";
// exportable simple action, sent to reducer after middleware has waited for Promise to resolve asynchronously
const setSongList = songs => ({
  type: SET_SONG_LIST,
  payload: songs
})

// NEEDS CLARIFICATION: complex action that takes in songTitle and also does something with dispatch, sends off api request with the method and auth header, middleware waits for promise to resolve (using 'then'), converts it to JSON, then dispatches the simple action to the reducer with the api return data as an argument
export const songSearch = songTitle => dispatch => {
  const url = `${ROOT_URL}&q=${songTitle}&type=track&${TOKEN}`;
  fetch(url, {
    method: 'GET',
    headers: {
      "Authorization":+"Bearer"+TOKEN
    }
  })
    .then(response =>response.json())
    // .then(songs => dispatch(setSongList(songs)))
    .then(response => console.log(response))
}



