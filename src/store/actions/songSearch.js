//grab unencoded client ID and client secret -- unencoded because base64 encoding will occur below
//it's the way spotify's example was set up so i'm going that route
import {CLIENT_ID_NO_ENCODE, CLIENT_SECRET_NO_ENCODE} from '../../config.js';

var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
let request = require('request');


export const songSearch = songTitle => dispatch => {}

export const SET_SONG_LIST = "SET_SONG_LIST";
//// exportable simple action, sent to reducer after middleware has waited for Promise to resolve asynchronously
const setSongList = songs => ({
  type: SET_SONG_LIST,
  payload: songs
})


// let root_url = 'https://api.spotify.com/v1/search?';

// export const songSearch = songTitle => dispatch => {
//   const url = `${root_url}&q=${songTitle}&type=track`
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       "Authorization": "Bearer" + `${token}`
//     }
//   })
//     .then(response =>response.json())
//     .then(songs => dispatch(setSongList(songs)))
//     .then(response => console.log(response))
// }


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

//// NEEDS CLARIFICATION: complex action that takes in songTitle and also does something with dispatch, sends off api request with the method and auth header, middleware waits for promise to resolve (using 'then'), converts it to JSON, then dispatches the simple action to the reducer with the api return data as an argument
////


