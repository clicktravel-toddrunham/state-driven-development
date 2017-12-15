import React from 'react';
import {
  UI,
  UISidebar,
  UILogo,
  UIComponent,
} from '@travel-cloud/react-component-library';

import Posts from './containers/Posts';

const App = () => (
  <UI>
    <UISidebar>
      <UILogo>Blog</UILogo>
    </UISidebar>
    <UIComponent>
      <Posts />
    </UIComponent>
  </UI>
);

export default App;
