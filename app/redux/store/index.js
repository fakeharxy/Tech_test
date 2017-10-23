/**
 *
 * @name: store/index.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

/**
 * Application imports
 */
import reducers from '../reducers';
import Tracking from '../middleware/Tracking';

/**
 * Application logic
 */
const trackingMiddleware = store => next => (action) => {
    Tracking.trackEvent(action);
    next(action);
};

const configureStore = (persistedState = {}) => {
    const productionMiddleware = [thunk, trackingMiddleware];

    const developmentMiddleware = [thunk, trackingMiddleware];

    // envify redux-dev-tools
    const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'Seenit Studio', actionsBlacklist: []
        }) : compose;

    const middleware = process.env.NODE_ENV === 'production' ? productionMiddleware : developmentMiddleware;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware)
    );

    return createStore(
        reducers,
        persistedState,
        enhancer,
    );
};

export default configureStore;
