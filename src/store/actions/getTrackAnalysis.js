import {CLIENT_ID_NO_ENCODE, CLIENT_SECRET_NO_ENCODE} from '../../config.js';

export const GET_TRACK_ANALYSIS = "GET_AUDIO_ANALYSIS";

const fetchAnalysis = songAudioDetails => ({
  type: GET_TRACK_ANALYSIS,
  payload: songAudioDetails,
})

let request = require('request');
let client_id = CLIENT_ID_NO_ENCODE;
let client_secret = CLIENT_SECRET_NO_ENCODE;


export const getTrackAnalysis = id => dispatch => {
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
        url: `https://api.spotify.com/v1/audio-analysis/${id}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log("audio analysis body: ", body);
        dispatch(fetchAnalysis(body))
      })
    }
  })
  ;
}


