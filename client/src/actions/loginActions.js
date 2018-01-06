import axios from 'axios';
import { push } from 'react-router-redux';

import {
  LOGGED_IN_SUCCESSFULLY,
  LOGGED_IN_FAILURE,
  LOGGED_IN_ERROR,
  LOGGED_OUT_SUCCESSFULLY,
  LOGGED_OUT_FAILURE,
} from './actionTypes';

const loginSuccess = (token) => ({ type: LOGGED_IN_SUCCESSFULLY, payload: token })
const loginFailure = (err) => ({ type: LOGGED_IN_FAILURE, payload: err })
const loginError = (err) => ({ type: LOGGED_IN_ERROR, payload: err })

export function login({ username, password }) {
  return (dispatch) => {
    axios.post('/api/auth', {
      username,
      password
    }).then((response) => {
      const { token, message } = response.data;

      if (token) {
        localStorage.setItem('token', token);

        dispatch(loginSuccess(token));
        dispatch(push('/dashboard'));
      } else {
        localStorage.removeItem('token');
        dispatch(loginError({ message }))
      }
    }).catch((error) => {
      dispatch(loginFailure({ error }));
    })
  }
}

export function autoLogin() {
  return (dispatch) => {
    axios.get('/api/testAuth', {
      headers: { 'x-access-token': localStorage.getItem('token')}
    }).then(response => {
      if (response.data.success) dispatch(push('/dashboard'))
    })
  }
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(push('/'))
    return {
      type: LOGGED_OUT_SUCCESSFULLY
    }
  }
}
