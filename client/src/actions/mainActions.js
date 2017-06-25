import axios from 'axios';
import {
  GET_MESSAGE,
} from './actionTypes';

export function getMessage() {
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/test')
      .then(res => {
        dispatch({
          type: GET_MESSAGE,
          payload: res.data
        })
      })
  }
}
