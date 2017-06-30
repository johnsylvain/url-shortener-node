import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import AuthenticatedRoute from './components/AuthenticatedRoute'
import AppContainer from './containers/AppContainer';
import DashboardContainer from './containers/DashboardContainer'

import './styles/style.scss';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={AppContainer}/>
          <AuthenticatedRoute path="/dashboard" component={DashboardContainer}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./');
}
