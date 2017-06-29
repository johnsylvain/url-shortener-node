import axios from 'axios';

import {
  LOGGED_SUCCESSFULLY,
  LOGGED_FAILURE
} from './actionTypes';

export function login({ username, password }) {
  return (dispatch) => {
    axios.post('/api/auth', {
      username,
      password
    }).then((response) => {
      console.log(response);
      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);

        dispatch(loginSuccess({ token }));
      } else {
        localStorage.removeItem('token');
      }
    }).catch((error) => {
      console.error(error);

      dispatch(loginFailure({ error }));
    })
  }
}

const loginSuccess = (payload) => ({
  type: LOGGED_SUCCESSFULLY,
  payload
})

const loginFailure = (payload) => ({
  type: LOGGED_FAILURE,
  payload
})
