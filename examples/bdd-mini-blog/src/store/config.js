import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import stateRequest from './stateRequestMiddleware';

import posts from './posts';

const reducers = combineReducers({
  posts,
});

const configureStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(stateRequest)));

const configuredStore = configureStore();

export default configuredStore;
