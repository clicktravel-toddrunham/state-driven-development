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
          user: state.data.users.filter(user => user.name === action.name),
        },
      };
    default:
      return state;
  }
};

export { actionTypes, stateTypes, fetchUsers, selectUser, initialState };

export default users;
