
import * as actions from '../constants';

export function toggleFavourite(id){
  return (dispatch) => {
    dispatch({
      type: actions.FAVOURITE_TOGGLE,
      payload: {
        id
      }
    });
  }
}
