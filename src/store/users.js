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
  stateType: stateTypes.FETCHING_USERS,
  users: [], // These could probably be in a 'data' object, may as well use this 
  user: [], // as an opportunity to give our stores more consistent structure
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
        stateType: stateTypes.FETCHED_USERS,
        users: [{ name: 'Tom' }, { name: 'Chris' }, { name: 'Sam' }],
      };
    case actionTypes.SELECT_USER:
      return {
        ...state,
        stateType: stateTypes.SELECTED_USER,
        user: state.users.filter(user => user.name === action.name),
      };
    default:
      return state;
  }
};

export { actionTypes, stateTypes, fetchUsers, selectUser, initialState };

export default users;
