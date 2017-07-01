import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import * as actionCreators from '../actions/loginActions';

export default connect(
  null,
  actionCreators
)(App);
