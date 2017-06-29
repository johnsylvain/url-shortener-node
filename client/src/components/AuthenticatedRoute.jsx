import React from 'react';
import {
  Route, Redirect
} from 'react-router-dom';
import { isAuthenticated } from '../utils/require-auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
   return isAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    }
  }/>
)

export default AuthenticatedRoute;
