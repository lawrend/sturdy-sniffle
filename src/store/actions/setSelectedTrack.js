import {CLIENT_ID_NO_ENCODE, CLIENT_SECRET_NO_ENCODE} from '../../config.js';

export const SET_SELECTED_TRACK = "SET_SELECTED_TRACK";

const songSelector = trackId => ({
  type: SET_SELECTED_TRACK,
  payload: trackId,
})

let request = require('request');
let client_id = CLIENT_ID_NO_ENCODE;
let client_secret = CLIENT_SECRET_NO_ENCODE;


export const setSelectedTrack = id => dispatch => {
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
        url: `https://api.spotify.com/v1/audio-features/${id}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log("body: ", body);
      })
    }
  })
  ;
}


