/**
 *
 * @name: MovieList/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import { connect } from 'react-redux';

/**
 * Application imports
 */
import * as actions from './actions';
import MovieList from './components/MovieList';

/**
 * Application logic
 */
const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  };
};

const MovieListContainner = connect(
  mapStateToProps,
  Object.assign({}, actions),
)(MovieList);

export default MovieListContainner;
