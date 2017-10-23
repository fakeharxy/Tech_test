/**
 *
 * @name: MasterLayout.js
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
const MasterLayout = ({ className, children }) => (
  <div className={`${className} container`}>
    <div className='row'>
      <div className='col-md-12'>
        {children}
      </div>
    </div>
  </div>
);

MasterLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};

export default styled(MasterLayout)`
  &.container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
