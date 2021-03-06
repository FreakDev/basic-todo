import 'whatwg-fetch'

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './createStore'

import User from './cmp/user/User'
import Tasks from './cmp/tasks/Tasks'

const store = createStore()

ReactDOM.render(
    <Provider store={store} >
        <Fragment>
            <User />
            <Tasks />
        </Fragment>
    </Provider>,
  document.getElementById('app')
);
