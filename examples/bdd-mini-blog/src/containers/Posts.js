import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { stateTypes, fetchPosts, selectPost } from '../store/posts';
import PostList from '../components/PostList';
import Post from '../components/Post';

class Posts extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchPosts();
    });
  }

  componentHasStateType = () => {
    const { stateType, posts, post } = this.props;
    switch (stateType) {
      case stateTypes.FETCHED_POSTS:
        return <PostList posts={posts} selectPost={this.handleSelectPost} />;
      case stateTypes.SELECTED_POST:
        return <Post post={post} />;
      default:
        return 'Loading...';
    }
  };

  handleSelectPost = id => this.props.selectPost(id);

  render() {
    return this.componentHasStateType();
  }
}

// eslint-disable-next-line
Posts.propTypes = {
  stateType: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default connect(
  ({ posts }) => ({
    stateType: posts._stateType,
    posts: posts.data.posts,
    post: posts.data.post,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchPosts,
        selectPost,
      },
      dispatch,
    ),
)(Posts);
