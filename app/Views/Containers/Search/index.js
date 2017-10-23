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
import Search from './components/Search';

/**
 * Application logic
 */
const actions = {};

const mapStateToProps = (state) => {
  return {
  };
};

const SearchContainner = connect(
  mapStateToProps,
  Object.assign({}, actions),
)(Search);

export default SearchContainner;
