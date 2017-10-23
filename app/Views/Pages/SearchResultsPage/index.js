/**
 *
 * @name: SearchResultsPage/index.js
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
import MovieList from '../../Containers/MovieList';
import MasterLayout from '../../Layout/MasterLayout';

/**
 * Application logic
 */
const SearchResultsPage = ({ className, searchQuery }) => (
  <div>
    <MasterLayout>

      <MovieList searchQuery={searchQuery} />

    </MasterLayout>
  </div>
);

SearchResultsPage.propTypes = {
  className: PropTypes.string
};

export default styled(SearchResultsPage)`
`;
