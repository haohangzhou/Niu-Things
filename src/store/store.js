import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' ? logger : ''];

//add redux dev tools
const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(
	rootReducer,

	composedEnhancers
);
