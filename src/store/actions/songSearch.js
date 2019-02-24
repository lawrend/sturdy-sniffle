//grab unencoded client ID and client secret -- unencoded because base64 encoding will occur below
//it's the way spotify's example was set up so i'm going that route
import {CLIENT_ID_NO_ENCODE, CLIENT_SECRET_NO_ENCODE} from '../../config.js';

let request = require('request'); // "Request" library
let client_id = CLIENT_ID_NO_ENCODE; // Your client id
let client_secret = CLIENT_SECRET_NO_ENCODE; // Your secret


export const SET_SONG_LIST = "SET_SONG_LIST";
//// exportable simple action, sent to reducer after middleware has waited for Promise to resolve asynchronously
const setSongList = songs => ({
  type: SET_SONG_LIST,
  payload: songs
})

export const SET_SEARCH_TERM ="SET_SEARCH_TERM";

const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: term,
})

export const songSearch = songTitle => dispatch => {
  // application requests authorization
  let authOptions = {
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
      let token = body.access_token;
      let options = {
        url: `https://api.spotify.com/v1/search?q=${songTitle}&type=track`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body.tracks)
        dispatch(setSongList(body.tracks.items))
        dispatch(setSearchTerm(songTitle))
      })
    }
  })
  ;
}


