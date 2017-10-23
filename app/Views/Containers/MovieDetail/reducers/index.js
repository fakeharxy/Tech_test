/**
 *
 * @name: reducers/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */

/**
 * Application imports
 */
import initialState from './initialState';
import * as actions from '../constants';

/**
 * Application logic
 */


export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case actions.MOVIE_DETAIL_FETCH_START: {
      return state;
    }
    case actions.MOVIE_DETAIL_FETCH_SUCCESS: {

      console.log(payload.movieDetail)

      return {
        ...state,
        ...payload.movieDetail
      };
    }
    case actions.MOVIE_DETAIL_FETCH_FAILED: {
      return state;
    }
    case actions.MOVIE_DETAIL_CLEAR: {
      return state;
    }
    default:
      return state;
  }
}
