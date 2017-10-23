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
    case actions.FAVOURITE_TOGGLE: {

      if(!state.includes(payload.id)) {
        return [...state, payload.id];
      }

      return state.filter((id) => id !== payload.id );
    }
    default:
      return state;
  }
}
