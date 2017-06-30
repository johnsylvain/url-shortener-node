import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import * as actionCreators from '../actions/loginActions';

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(Dashboard);
