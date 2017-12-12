import React from 'react';
import {
  UI,
  UISidebar,
  UILogo,
  UIComponent,
} from '@travel-cloud/react-component-library';

import UsersWithSwitch from './containers/UsersWithSwitch';

const App = () => (
  <UI>
    <UISidebar>
      <UILogo>SDD</UILogo>
    </UISidebar>
    <UIComponent>
      <UsersWithSwitch />
    </UIComponent>
  </UI>
);

export default App;
