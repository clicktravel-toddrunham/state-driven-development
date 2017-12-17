import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Posts from '../containers/Posts';
import { initialState, stateTypes } from '../store/posts';

const mockStore = configureMockStore();

const posts = [
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
];
const post = [
  {
    id: 1,
    title: 'Blog post one',
    content: 'Content here...',
    author: 'Chris',
  },
];

describe('Posts container', () => {
  it('Scenario: The reader can view all posts', () => {
    const store = mockStore({
      posts: {
        ...initialState,
        _stateType: stateTypes.FETCHED_POSTS,
        data: { posts },
      },
    });
    const tree = renderer.create(<Posts store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
