import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
  routerReducer, routerMiddleware
} from 'react-router-redux';
import { combineReducers } from 'redux';


import reducer from './reducers';

export const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];
const middleware = applyMiddleware(...middlewares);

export const store = createStore(
  combineReducers({
    ...reducer,
    router: routerReducer
  }),
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
