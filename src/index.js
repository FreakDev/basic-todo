import 'whatwg-fetch'

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './createStore'

import User from './cmp/user/User'

const store = createStore()

ReactDOM.render(
    <Provider store={store} >
        <User />
        {/* <Tasks /> */}
    </Provider>,
  document.getElementById('app')
);
