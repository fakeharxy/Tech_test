/**
 *
 * @name: Provider/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Application imports
 */
import configureStore from '../store';

/**
 * Application logic
 */
const persistedState = {};

export default class ProviderWrapper extends Component {
  render() {
    return (
      <Provider store={configureStore(persistedState)}>
        {this.props.children}
      </Provider>
    );
  }
}

ProviderWrapper.propTypes = {
  children: PropTypes.element
};
