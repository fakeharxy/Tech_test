/**
 *
 * @name: MovieDetail/index.js
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
import MovieDetail from './components/MovieDetail';

/**
 * Application logic
 */
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail
  };
};

const MovieDetailContainner = connect(
  mapStateToProps,
  Object.assign({}, actions),
)(MovieDetail);

export default MovieDetailContainner;
