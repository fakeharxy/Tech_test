/**
 *
 * @name: SearchPage/index.js
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
import MasterLayout from '../../Layout/MasterLayout';
import Search from '../../Containers/Search';


/**
 * Application logic
 */
const SearchPage = ({ className }) => (
  <div className={className}>
    <MasterLayout>

      <h1>Movie Search Application</h1>

      <Search />

    </MasterLayout>
  </div>
);

SearchPage.propTypes = {
  className: PropTypes.string
};

export default styled(SearchPage)`
`;
