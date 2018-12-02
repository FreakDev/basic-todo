import 'whatwg-fetch'

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './createStore'


const store = createStore()

ReactDOM.render(
    <Provider store={store} >
    </Provider>,
  document.getElementById('app')
);
