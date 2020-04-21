/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getActivePlayer } from '../../../actions/index';

import Login from './login';
import Game from './game';

class App extends Component {

  componentDidMount() {
    // Onload, check if sid saved if not surfaced already
    if (!this.props.activePlayer) {
      this.props.getActivePlayer();
    }
  }

  render() {
    // ==================================
    //          LOGIN
    // ==================================
    if (!this.props.activePlayer || this.props.activePlayer === -1 ) {
      return <Login />
    }

    // ==================================
    //          GAME
    // ==================================
    else {
      return <Game />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activePlayer: state.activePlayer,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getActivePlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);