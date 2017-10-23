/**
 *
 * @name: MovieTile/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Application imports
 */
import Favourites from '../../Containers/Favourites';

/**
 * Application logic
 */
const getBackground = (posterUrl) => {
  if(posterUrl !== null) {
    return {backgroundImage: `url(http://image.tmdb.org/t/p/w300/${posterUrl})`}
  }
  return {backgroundColor: '#666666'}
};

const MovieTile = ({ className, movie }) => (
  <div className={`${className} movie-tile`}>
    <Link className='movie-tile__link' to={`/movie/${movie.id}`} style={getBackground(movie.poster_path)}>
      <span className='movie-tile__favourite'>
        <Favourites id={movie.id} />
      </span>
      <span className='movie-tile__title'>
        {movie.title}
      </span>
    </Link>
  </div>
);

MovieTile.propTypes = {
  className: PropTypes.string
};

export default styled(MovieTile)`

  &.movie-tile {
    margin-bottom: 2rem;
    overflow: hidden;
  }
  
  .movie-tile__link {
    display: block;
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    &:hover {
      .movie-tile__title {
      transform: translateY(0%);
      }
    }
  }
  
  .movie-tile__title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.5rem;
    background-color: #333333;
    color: #ffffff;
    transition: transform 0.25s linear;
    transform: translateY(100%);
  }
  
  .movie-tile__favourite {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
