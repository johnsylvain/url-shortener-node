import axios from 'axios';

import {
  LOGGED_SUCCESSFULLY,
  LOGGED_FAILURE
} from './actionTypes';

export function login(username, password) {
  return (dispatch) => {
    axios.post('/api/auth', {
      username,
      password
    }).then((response) => {
      const token = response.body.token;
      const userId = response.body.userId;

      if (token && userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        dispatch(loginSuccess({userId: userId, token: token}));
      } else {
        localStorage.removeItem('token');
      }
    }).catch((error) => {
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
