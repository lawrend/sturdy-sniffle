import axios from 'axios';
import { YT_KEY } from '../config.js';

const KEY = YT_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
