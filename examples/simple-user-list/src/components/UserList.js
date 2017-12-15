import React from 'react';
import PropTypes from 'prop-types';

import { UIList } from '@travel-cloud/react-component-library';

const UserList = ({ users, selectUser }) => (
  <UIList.Grid items={users} keyMap={[{ key: 'name', onClick: selectUser }]} />
);

// eslint-disable-next-line
UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default UserList;
