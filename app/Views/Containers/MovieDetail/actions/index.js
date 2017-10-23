
import * as actions from '../constants';

import TheMovieDbApi from '../../../../api/TheMovieDbApi';


export function getMovie(movieId){
  return (dispatch) => {
    dispatch({
      type: actions.MOVIE_DETAIL_FETCH_START
    });
    return TheMovieDbApi.getMovie(movieId)
      .then(({ data }) => {
        dispatch({
          type: actions.MOVIE_DETAIL_FETCH_SUCCESS,
          payload: {
            movieDetail: data
          }
        });
      })
      .catch(() => {
        dispatch({
          type: actions.MOVIE_DETAIL_FETCH_FAILED,
        });
      });
  }
}

export function clear(movieId){
  return (dispatch) => {
    dispatch({
      type: actions.MOVIE_DETAIL_FETCH_START
    });
    return TheMovieDbApi.getMovie(movieId)
      .then(({ data }) => {
        dispatch({
          type: actions.MOVIE_DETAIL_FETCH_SUCCESS,
          payload: {
            movieDetail: data
          }
        });
      })
      .catch(() => {
        dispatch({
          type: actions.MOVIE_DETAIL_FETCH_FAILED,
        });
      });
  }
}
