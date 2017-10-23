/**
 *
 * @name: TheMovieDbApi.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import axios from 'axios';

/**
 * Application imports
 */

/**
 * Application logic
 */
const API_KEY = '24311fb16398f8697d79354aae55e3a0';
const BASE_URL = 'https://api.themoviedb.org';
const VERSION = '3';
const LANGUAGE = 'en-US';
const INCLUDE_ADULT = 'false';

class TheMovieDbApi {

  static searchMovies (query, page) {
    return axios
      .get(`${BASE_URL}/${VERSION}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=${LANGUAGE}&include_adult=${INCLUDE_ADULT}`);
  }

  static getMovie (movieId) {
    return axios
      .get(`${BASE_URL}/${VERSION}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=videos,images,credits`);
  }

}

export default TheMovieDbApi;
