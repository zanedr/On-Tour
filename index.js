import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore'
import AppContainer from './on-tour/AppContainer'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
