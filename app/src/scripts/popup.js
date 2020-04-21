/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react';
import {render} from 'react-dom';

import App from './popup/components/app';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

require('../sass/popup.scss');

const proxyStore = new Store({
  portName: 'ageofmakers'
});

const unsubscribe = proxyStore.subscribe(() => {
  unsubscribe(); // make sure to only fire once
  render(
    <Provider store={proxyStore}>
      <App/>
    </Provider>
    , document.getElementById('ageofmakers'));
});