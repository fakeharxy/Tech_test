/**
 *
 * @name: MovieTile/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Application imports
 */
import MovieDetail from '../../Containers/MovieDetail';
import MasterLayout from '../../Layout/MasterLayout';

/**
 * Application logic
 */
const MovieTile = ({ className, movieId }) => (
  <div className={className}>
    <MasterLayout>

      <MovieDetail movieId={movieId} />

    </MasterLayout>
  </div>
);

MovieTile.propTypes = {
  className: PropTypes.string
};

export default styled(MovieTile)`
`;
