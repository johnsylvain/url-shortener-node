import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from '../components/Dashboard';
import * as loginActionCreators from '../actions/loginActions';
import * as mainActionCreators from '../actions/mainActions';

function mapStateToProps(state) {
  return {
    main: state.main,
    login: state.login,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(loginActionCreators, dispatch),
      main: bindActionCreators(mainActionCreators, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
