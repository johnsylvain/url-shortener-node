import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  ConnectedRouter, push
} from 'react-router-redux';


import { store, history } from './store';
import AuthenticatedRoute from './components/AuthenticatedRoute'
import AppContainer from './containers/AppContainer';
import About from './components/About'

import './styles/style.scss';


render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={AppContainer}/>
          <AuthenticatedRoute path="/dashboard" component={About}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./');
}
