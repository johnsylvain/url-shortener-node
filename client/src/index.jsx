import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store';
import AuthenticatedRoute from './components/AuthenticatedRoute'
import AppContainer from './containers/AppContainer';
import About from './components/About'


render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AppContainer}/>
        <AuthenticatedRoute path="/about" component={About}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./');
}
