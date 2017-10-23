/**
 *
 * @name: Favourites.js
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
const isActive = (id, favourites) => (favourites.includes(id))

const Favourites = ({ className, id, favourites, toggleFavourite }) => (
  <button type='button' className={`${className} ${isActive(id, favourites) ? 'favourites_active' : 'favourite'}`}
    onClick={(e) => {
      e.preventDefault();
      toggleFavourite(id);
    }}
  >
    <svg height='24' width='20' className='favourite__icon'>
      <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
    </svg>
  </button>
);

Favourites.propTypes = {
  className: PropTypes.string
};

export default styled(Favourites)`

  &.favourite {
    padding: 0.2rem;
    border: none;
    
    .favourite__icon {
      display: block;
      fill: #cccccc;
    }
  }
  
  &.favourites_active {
    padding: 0.2rem;
    border: none;

    .favourite__icon {
        display: block;
        fill: #FFD700;
    }
  }
`;
