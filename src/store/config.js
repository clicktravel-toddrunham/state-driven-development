import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import users from './users';

const reducers = combineReducers({
  users,
});

const configureStore = () => createStore(
  reducers,
  composeWithDevTools(),
);

const configuredStore = configureStore();

export default configuredStore;
