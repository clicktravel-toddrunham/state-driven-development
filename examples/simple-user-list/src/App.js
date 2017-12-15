import React from 'react';
import {
  UI,
  UISidebar,
  UILogo,
  UIComponent,
} from '@travel-cloud/react-component-library';

import Users from './containers/Users';

const App = () => (
  <UI>
    <UISidebar>
      <UILogo>SDD</UILogo>
    </UISidebar>
    <UIComponent>
      <Users />
    </UIComponent>
  </UI>
);

export default App;
