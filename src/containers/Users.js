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
    stateType: users.stateType,
    users: users.users,
    user: users.user,
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
