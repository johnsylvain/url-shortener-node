import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import * as actionCreators from '../actions/mainActions';

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(App);
