/**
 *
 * @name: MovieDetail.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Application imports
 */

import PersonOverview from '../../../Common/PersonOverview';
import Favourites from '../../../Containers/Favourites';


/**
 * Application logic
 */

class MovieDetail extends Component {

  componentDidMount() {
    const { movieId, getMovie } = this.props;
    getMovie(movieId);
  }

  componentWillUnmount(){
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      className,
      movieDetail: {
        id = '',
        title = '',
        poster_path = '',
        vote_average = 0,
        genres = [],
        credits = {},
        videos = [],
        release_date,
        overview = ''
      }
    } = this.props;

    return (
      <div className={className}>
        <div className='row'>
          <div className='col-md-12'>

            <div className='movie-details__header'>
              <h1 className='movie-details__title'>{title} <span className='movie-details__release-year'>({new Date(release_date).getFullYear()})</span></h1>

              <div className='star-rating'>
                <span className='star-rating__value'>{vote_average}</span>
                <span className='star-rating__max'>/10</span>
              </div>

            </div>

          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>

            <div className='movie-details__poster-wrapper'>
              <img src={`http://image.tmdb.org/t/p/w1920/${poster_path}`} alt={title} />
            </div>

          </div>
          <div className='col-md-8'>
            <div className='movie-details'>

              <div className='movie-details__favourite'>
                <Favourites id={id} />
              </div>

              <h2>About</h2>
              <div className='movie-details__overview'>
                <p>{overview}</p>
              </div>

              {genres && (
                <dl className='definition-list'>
                  <dt>Genres</dt>
                  <dd>
                    {genres.map(
                      (genre) => (<span key={genre.id}>{genre.name}</span>)
                    )}
                  </dd>
                </dl>
              )}

              {credits.crew && (
                <dl className='definition-list'>
                  <dt>Director</dt>
                  <dd>
                    {credits.crew
                      .filter((member) => (member.job === 'Director'))
                      .map((member) => (<PersonOverview key={member.id} person={member} />))
                    }
                  </dd>
                </dl>
              )}

              {credits.cast && (
                <dl className='definition-list'>
                  <dt>Cast</dt>
                  <dd>
                    {credits.cast.map((member) => (<PersonOverview key={member.cast_id} person={member} />))}
                  </dd>
                </dl>
              )}

            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {videos.results && (
              <div className='trailer-container'>
                <h2>Trailers</h2>
                <div className='row'>
                  {videos.results
                    .filter((video) => (video.type === 'Trailer'))
                    .map((video) => (
                      <div className='col-md-4 trailer-container__trailer-item' key={video.key}>
                        <div key={video.id} className='embed-responsive embed-responsive-16by9'>
                          <iframe className='embed-responsive-item' title={video.name} src={`https://www.youtube.com/embed/${video.key}`} frameBorder='0' allowFullScreen></iframe>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  className: PropTypes.string
};

export default styled(MovieDetail)`

  .movie-details__header {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: #333333;
    color: #c0c0c0;
  }
  
  .movie-details {
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1px;
  }
  
  .movie-details__favourite {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  .movie-details__title {
    color: #ffffff;
    font-weight: 300;
  }
  
  .movie-details__release-year {
    color: #c0c0c0;
    font-weight: 100;
    font-size: 1.8rem;
  }
  
  .star-rating {
    .star-rating__value {
      color: #ffffff;
      font-size: 2rem;
    }
    .star-rating__max {
      color: #c0c0c0;
      font-size: 1rem;
    }
  }

  .movie-details__poster-wrapper {
    img {
      width: 100%;
    }
  }
  
  .definition-list {
    dd {
      span {
        &::after {
          content: ', ';
        }
        &:last-child::after {
          content: '';
        }
        &:nth-last-child(2)::after {
          content: ' and ';
        }
      }
    }
  }
  
  .trailer-container {
    margin-top: 1rem;
  }
  
  .trailer-container__trailer-item {
    margin-bottom: 2rem;
  }

`;
