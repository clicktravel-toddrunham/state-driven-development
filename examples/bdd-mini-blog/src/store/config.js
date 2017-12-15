import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import posts from './posts';

const reducers = combineReducers({
  posts,
});

const configureStore = () => createStore(
  reducers,
  composeWithDevTools(),
);

const configuredStore = configureStore();

export default configuredStore;
