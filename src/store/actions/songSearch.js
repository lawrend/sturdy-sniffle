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
import {CLIENT_ID, CLIENT_SECRET} from '../../config.js';
console.log("client Id:", CLIENT_ID, "client secret:", CLIENT_SECRET)

let request = require('request');

// let SpotifyWebApi = require('spotify-web-api-node')

// let spotifyApi = new SpotifyWebApi({
//   clientId: CLIENT_ID,
//   clientSecret: CLIENT_SECRET,
//   redirectUri: 'localhost:3000/',
// })

// spotifyApi.authorizationCodeGrant()
//   .then(function(data) {
//     console.log('The token expires in', data.body['expires_in']);
//     console.log('the access token is', data.body['access_token']);
//     console.log('The refresh token is', data.body['refresh_token']);
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//   },
//     function(err) {
//       console.log('something went wrong!', err);
//     }
//   )


// export const songSearch = (songTitle) => {
//   spotifyApi.searchTracks(songTitle)
//     .then(function(data) {
//       console.log('Search by ', songTitle, data.body);
//     }, function(err){
//       console.error(err);
//     });
// }

// fetch("https://accounts.spotify.com/api/token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Authorization": "Basic" + `${CLIENT_ID} {CLIENT_SECRET}`,
//   },
//   body: {
//     grant_type: "client_credentials",
//   },
// })
//   .then(response => console.log(response.error, response.data));

// const ROOT_URL = "https://api.spotify.com/v1/search?"

export const SET_SONG_LIST = "SET_SONG_LIST";
//// exportable simple action, sent to reducer after middleware has waited for Promise to resolve asynchronously
const setSongList = songs => ({
  type: SET_SONG_LIST,
  payload: songs
})

//// NEEDS CLARIFICATION: complex action that takes in songTitle and also does something with dispatch, sends off api request with the method and auth header, middleware waits for promise to resolve (using 'then'), converts it to JSON, then dispatches the simple action to the reducer with the api return data as an argument
////
// export const songSearch = songTitle => dispatch => {
//   const url = `${ROOT_URL}&q=${songTitle}&type=track`
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       "Authorization": "Bearer" + `${TOKEN}`
//     }
//   })
//     .then(response =>response.json())
//     .then(songs => dispatch(setSongList(songs)))
//     .then(response => console.log(response))
// }



