/**
 *
 * @name: PersonOverview/index.js
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

/**
 * Application logic
 */
const PersonOverview = ({ className, person }) => (
  <span className={`${className} movie-tile`}>
      {person.name}
  </span>
);

PersonOverview.propTypes = {
  className: PropTypes.string
};

export default styled(PersonOverview)`
`;
