/**
 *
 * @name: app/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Application imports
 */
import Provider from './redux/provider';
import SearchPage from './Views/Pages/SearchPage';
import SearchResultsPage from './Views/Pages/SearchResultsPage';
import MovieDetailPage from './Views/Pages/MovieDetailPage';

/**
 * Application logic
 */

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route
          exact path='/'
          render={(props) => (<SearchPage />)}
        />
        <Route
          exact path='/search-results/:searchQuery'
          render={({ match: { params: { searchQuery } } }) => (<SearchResultsPage searchQuery={searchQuery} />)}
        />
        <Route
          exact path='/movie/:movieId'
          render={({ match: { params: { movieId } } }) => (<MovieDetailPage movieId={movieId} />)}
        />
      </Switch>
    </Router>
  </Provider>
);

export default App;
