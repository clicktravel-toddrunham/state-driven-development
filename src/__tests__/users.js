import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Users from '../containers/UsersWithSwitch';
import { initialState } from '../store/users';

const mockStore = configureMockStore();

const users = [{ name: 'Tom' }, { name: 'Chris' }, { name: 'Sam' }];
const user = [{ name: 'Tom' }];

describe('Users container', () => {
  it('should render Users correctly with the fetching users state', () => {
    const store = mockStore({ users: initialState });
    const tree = renderer.create(<Users store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Users correctly with the fetched users state', () => {
    const store = mockStore({ users: { ...initialState, stateType: 'FETCHED_USERS', users } });
    const tree = renderer.create(<Users store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Users correctly with the selected user state', () => {
    const store = mockStore({ users: { ...initialState, stateType: 'SELECTED_USER', user } });
    const tree = renderer.create(<Users store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
