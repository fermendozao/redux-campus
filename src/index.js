import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import Root from './app/containers/Root';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import configureStore from './app/store/configureStore';
import axios from 'axios';

// Set axios defaults
axios.defaults.baseURL = 'http://redsep.pythonballz.com/api/v1/';
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
