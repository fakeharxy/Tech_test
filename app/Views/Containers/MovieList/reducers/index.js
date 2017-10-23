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
    case actions.MOVIE_LIST_FETCH_START: {
      return state;
    }
    case actions.MOVIE_LIST_FETCH_SUCCESS: {
      return {
        ...state,
        ...payload.movieList,
        results: [...state.results, ...payload.movieList.results]
      };
    }
    case actions.MOVIE_LIST_FETCH_FAILED: {
      return state;
    }
    case actions.MOVIE_LIST_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
}
