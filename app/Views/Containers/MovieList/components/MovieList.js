/**
 *
 * @name: MovieTile.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Application imports
 */
import MovieTile from '../../../Common/MovieTile';

/**
 * Application logic
 */

class MovieList extends Component {

  componentDidMount() {
    const { searchQuery, movieList: { page }, searchMovies } = this.props;
    searchMovies(searchQuery, page);
  }

  componentWillUnmount(){
    const { clear } = this.props;
    clear();
  }

  render() {
    const { className, searchQuery, searchMovies, movieList: { results = [], page = 1, total_pages: totalPages = 1 } } = this.props;

    return (
      <div className={className}>
        <div className='row'>
          {searchQuery === 'undefined' && (<Redirect to={{pathname: '/'}}/>)}
          {results.map((movie) => (
            <div key={movie.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <MovieTile movie={movie} />
            </div>
          ))}

          {!results.length && (<div>Nothing found</div>)}
        </div>

        {page < totalPages && (
          <div className='row'>
            <div className='col-md-12'>
              <button type='button'
                onClick={()=>{
                  const nextPage = page + 1;
                  searchMovies(searchQuery, nextPage);
                }}
              >Load more movies</button>
            </div>
          </div>
        )}

      </div>
    );
  }
}

MovieTile.propTypes = {
  className: PropTypes.string
};

export default styled(MovieList)`
`;
