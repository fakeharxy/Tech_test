
import * as actions from '../constants';

import TheMovieDbApi from '../../../../api/TheMovieDbApi';


export function searchMovies(searchQuery, page){
  return (dispatch) => {
    dispatch({
      type: actions.MOVIE_LIST_FETCH_START
    });
    return TheMovieDbApi.searchMovies(searchQuery, page)
      .then(({ data }) => {
        dispatch({
          type: actions.MOVIE_LIST_FETCH_SUCCESS,
          payload: {
            movieList: data
          }
        });
      })
      .catch(() => {
        dispatch({
          type: actions.MOVIE_LIST_FETCH_FAILED,
        });
      });
  }
}

export function clear(){
  return (dispatch) => {
    dispatch({
      type: actions.MOVIE_LIST_CLEAR
    });
  }
}
