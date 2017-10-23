/**
 *
 * @name: reducers/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

/**
 * Application imports
 */
import movieListReducers from '../../Views/Containers/MovieList/reducers';
import movieDetailReducers from '../../Views/Containers/MovieDetail/reducers';
import favouritesReducers from '../../Views/Containers/Favourites/reducers';


/**
 * Application logic
 */
export default combineReducers({
  movieList: movieListReducers,
  movieDetail: movieDetailReducers,
  favourites: favouritesReducers,
  form: reduxFormReducer.plugin({})
});
