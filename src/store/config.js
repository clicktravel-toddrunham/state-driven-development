import { createStore, combineReducers } from 'redux';

import users from './users';

const reducers = combineReducers({
  users,
});

const configureStore = () => createStore(reducers);

const configuredStore = configureStore();

export default configuredStore;
