import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configuredStore from './store/config';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
