const AUTH_TOKEN = "BQAA2Eu529KYYJ4ACnNtbobzKZVHfObd-06s4FpBvsH-veYgcBuZdjU5pVho-AXTktMkoDKRxd45rqTZo82qslVA8r8UcmK0HMfhz_GItNdlWQHYIRQNKgmbGdbOpYydQ9UobnDmC9OWJvoV";
const ROOT_URL = "https://api.spotify.com/v1/search?"

export const SONG_SEARCH = "SONG_SEARCH";

export function songSearch(songTitle) {
  const url = '${ROOT_URL}&q={songTitle}&type=track';
}
