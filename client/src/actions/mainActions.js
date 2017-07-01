import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
} from './actionTypes';

export function getLinks() {
  return function(dispatch) {
    dispatch({type: GET_LINKS_REQUEST})
    return axios.get('/api/links')
      .then(res => {
        dispatch({
          type: GET_LINKS_SUCCESS,
          payload: res.data
        })
      }).catch(err => {
        dispatch({
          type: GET_LINKS_FAILURE,
          payload: err
        })
      })
  }
}
