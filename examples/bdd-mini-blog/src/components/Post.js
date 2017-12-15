import React from 'react';
import PropTypes from 'prop-types';

import { UIList } from '@travel-cloud/react-component-library';

const Post = ({ post }) => (
  <UIList.Grid
    items={post}
    keyMap={[
      { key: 'title' },
      { key: 'content' },
      { key: 'author' },
    ]}
  />
);

// eslint-disable-next-line
Post.propTypes = {
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
