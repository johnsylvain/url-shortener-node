import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import * as actionCreators from '../actions/loginActions';

function mapStateToProps(state) {
  return {
    error: state.login.error,
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(App);
