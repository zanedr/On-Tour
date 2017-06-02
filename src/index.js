import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import { configureStore } from './configureStore'
import App from './on-tour/App';
import AppContainer from './on-tour/AppContainer'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { gasPrices } from './on-tour/actions/actions'

const store = configureStore();

store.dispatch(gasPrices())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
