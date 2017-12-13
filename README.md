## State Driven Development (SDD)

### Introduction

SDD is a development process where the application is designed and built
from the state down, with each domain (I.E Users, Blog Posts) being given a list of action and state types
that can be applied to it. These types are defined as a first step in the development process,
hence 'State Driven Development'. By doing this you clearly document how your application works and also gives each
state type a clear path through the application tree.

#### Application tree

<img src="state_tree.jpeg" width="500" height="440">

The application tree contains all of the components that make up an application,
with the state types creating a path through the tree to render the correct UI.
Because the path is now so well defined and contained by the state type,
it can be easily tested using snapshots.

#### Ties with BDD

When you start building your application using SDD, you start to realise that action
and state types are basically behaviours, and because of this tying in BDD techniques
is rudimental.


### Implementation (Using React + Redux)

#### Global Store

Start off by defining your action and state types, whether it's from BDD feature files
or from scratch. Use these as a jump off point to build your reducers. A complete example is below:

```jsx
const actionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  SELECT_USER: 'SELECT_USER',
};

const stateTypes = {
  FETCHING_USERS: 'FETCHING_USERS',
  FETCHED_USERS: 'FETCHED_USERS',
  SELECTED_USER: 'SELECTED_USER',
};

const initialState = {
  _stateType: stateTypes.FETCHING_USERS,
  data: {
    users: [],
    user: [],
  },
};

const fetchUsers = () => ({
  type: actionTypes.FETCH_USERS,
});

const selectUser = name => ({
  type: actionTypes.SELECT_USER,
  name,
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        _stateType: stateTypes.FETCHED_USERS,
        data: {
          ...state.data,
          users: [{ name: 'Tom' }, { name: 'Chris' }, { name: 'Sam' }],
        },
      };
    case actionTypes.SELECT_USER:
      return {
        ...state,
        _stateType: stateTypes.SELECTED_USER,
        data: {
          ...state.data,
          user: state.data.users.filter(user => user.name === action.name)
        },
      };
    default:
      return state;
  }
};

export { actionTypes, stateTypes, fetchUsers, selectUser, initialState };

export default users;
```

#### React Container

Think of your container as a router, it takes a condition (state type) and determines what
components need to be rendered using a switch statement as below:

```jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { stateTypes, fetchUsers, selectUser } from '../store/users';
import UserList from '../components/UserList';
import User from '../components/User';

class Users extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchUsers();
    }, 1000);
  }

  componentHasStateType = () => {
    const { stateType, users, user } = this.props;
    switch (stateType) {
      case stateTypes.FETCHED_USERS:
        return <UserList users={users} selectUser={this.handleSelectUser} />;
      case stateTypes.SELECTED_USER:
        return <User user={user} />;
      default:
        return 'Loading...';
    }
  };

  handleSelectUser = name => this.props.selectUser(name);

  render() {
    return this.componentHasStateType();
  }
}

// eslint-disable-next-line
Users.propTypes = {
  stateType: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default connect(
  ({ users }) => ({
    stateType: users._stateType,
    users: users.data.users,
    user: users.data.user,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchUsers,
        selectUser,
      },
      dispatch,
    ),
)(Users);
```

#### Snapshot testing

Use snapshot testing to keep a concise record of what the application tree
is supposed to look like with a state type applied to it like below:

```jsx
import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Users from '../containers/Users';
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
    const store = mockStore({
      users: { ...initialState, _stateType: 'FETCHED_USERS', data: { users } },
    });
    const tree = renderer.create(<Users store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Users correctly with the selected user state', () => {
    const store = mockStore({
      users: { ...initialState, _stateType: 'SELECTED_USER', data: { user } },
    });
    const tree = renderer.create(<Users store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

A full working example of the above is contained within this repository.