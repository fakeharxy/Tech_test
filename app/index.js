/**
 *
 * @name: app/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Application imports
 */
import App from './App';
import registerServiceWorker from './scripts/registerServiceWorker';

/**
 * Application logic
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
