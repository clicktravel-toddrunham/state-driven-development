import React from 'react';
import PropTypes from 'prop-types';

import { UIList } from '@travel-cloud/react-component-library';

const PostList = ({ posts, selectPost }) => (
  <UIList.Grid
    items={posts}
    keyMap={[{ key: 'id', onClick: selectPost }, { key: 'title' }]}
  />
);

// eslint-disable-next-line
PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default PostList;
