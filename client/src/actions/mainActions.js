import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILURE,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_FAILURE,
} from './actionTypes';

export function getLinks() {
  return function(dispatch) {
    dispatch({type: GET_LINKS_REQUEST})
    return axios.get('/api/links', {
      headers: { 'x-access-token': localStorage.getItem('token') }
    })
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

export function addLink({ url, description }) {
  return function(dispatch) {
    return axios.post('/api/links', {
      url, description, token: localStorage.getItem('token')
    })
      .then(res => {
        console.log('DATA', res.data)
        dispatch({
          type: ADD_LINK_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('ERROR', err)

        dispatch({
          type: ADD_LINK_FAILURE,
          payload: err
        })
      })
  }
}

export function deleteLink(id) {
  return function(dispatch) {
    return axios.delete(`/api/links/${id}`, {
      headers: { 'x-access-token': localStorage.getItem('token')}
    }).then(response => {
      console.log(response)
      dispatch(deleteLinkSuccess(id))
    }).catch(err => {
      dispatch(deleteLinkFailure(err))
    })
  }
}

const deleteLinkSuccess = (id) => ({
  type: DELETE_LINK_SUCCESS,
  payload: id
})

const deleteLinkFailure = (err) => ({
  type: DELETE_LINK_FAILURE,
  payload: err
})
