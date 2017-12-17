const actionTypes = {
  SWITCH_STATE_TYPE: 'SWITCH_STATE_TYPE',
  FETCH_POSTS: 'FETCH_POSTS',
  SELECT_POST: 'SELECT_POST',
  DELETE_POST: 'DELETE_POST',
  ADD_POST: 'ADD_POST',
  SUBMIT_POST: 'SUBMIT_POST',
};

const stateTypes = {
  FETCHING_POSTS: 'FETCHING_POSTS',
  FETCHED_POSTS: 'FETCHED_POSTS',
  SELECTED_POST: 'SELECTED_POST',
  DELETED_POST: 'DELETED_POST',
  ADDING_POST: 'ADDING_POST',
};

const initialState = {
  _stateType: stateTypes.FETCHING_POSTS,
  _availableStateTypes: stateTypes,
  data: {
    posts: [
      {
        id: 1,
        title: 'Blog title',
        content: 'Content here...',
        author: 'author name',
      },
    ],
    post: [
      {
        id: 1,
        title: 'Blog title',
        content: 'Content here...',
        author: 'author name',
      },
    ],
  },
};

const fetchPosts = () => ({
  type: actionTypes.FETCH_POSTS,
});

const selectPost = id => ({
  type: actionTypes.SELECT_POST,
  id,
});

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_STATE_TYPE:
      return {
        ...state,
        _stateType: stateTypes[action.stateType],
      };
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        _stateType: stateTypes.FETCHED_POSTS,
        data: {
          ...state.data,
          posts: [
            {
              id: 1,
              title: 'Blog post one',
              content: 'Content here...',
              author: 'Chris',
            },
            {
              id: 2,
              title: 'Blog post two',
              content: 'Content here...',
              author: 'Sam',
            },
          ],
        },
      };
    case actionTypes.SELECT_POST:
      return {
        ...state,
        _stateType: stateTypes.SELECTED_POST,
        data: {
          ...state.data,
          post: state.data.posts.filter(post => post.id === action.id),
        },
      };
    default:
      return state;
  }
};

export { actionTypes, stateTypes, fetchPosts, selectPost, initialState };

export default posts;
