/**
 *
 * @name: Favourites/index.js
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
import Favourites from './components/Favourites';

/**
 * Application logic
 */
const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  };
};

const FavouritesContainer = connect(
  mapStateToProps,
  Object.assign({}, actions),
)(Favourites);

export default FavouritesContainer;
