import React from 'react';
import PropTypes from 'prop-types';

import { UIList } from '@travel-cloud/react-component-library';

const User = ({ user }) => (
  <UIList.Grid items={user} keyMap={[{ key: 'name' }]} />
);

// eslint-disable-next-line
User.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default User;
