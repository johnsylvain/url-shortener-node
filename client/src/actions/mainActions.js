import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILURE,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_FAILURE,
  UPDATE_LINK_SUCCESS,
  UPDATE_LINK_FAILURE,
} from './actionTypes';

const addLinkSuccess = (link) => ({ type: ADD_LINK_SUCCESS, payload: link })
const addLinkFailure = (err) => ({ type: ADD_LINK_FAILURE, payload: err })
const deleteLinkSuccess = (id) => ({ type: DELETE_LINK_SUCCESS, payload: id })
const deleteLinkFailure = (err) => ({ type: DELETE_LINK_FAILURE, payload: err })
const getLinksSuccess = (links) => ({ type: GET_LINKS_SUCCESS, payload: links })
const getLinksFailure = (err) => ({ type: GET_LINKS_FAILURE, payload: err })
const updateLinkSuccess = (link) => ({ type: UPDATE_LINK_SUCCESS, payload: link })
const updateLinkFailure = (err) => ({ type: UPDATE_LINK_FAILURE, payload: err })

export function getLinks() {
  return function(dispatch) {
    dispatch({type: GET_LINKS_REQUEST})
    return axios.get('/api/links', {
      headers: { 'x-access-token': localStorage.getItem('token') }
    })
      .then(res => {
        dispatch(getLinksSuccess(res.data))
      })
      .catch(err => {
        dispatch(getLinksFailure(err))
      })
  }
}

export function addLink({ url, description }) {
  return function(dispatch) {
    return axios.post('/api/links', {
      url, description, token: localStorage.getItem('token')
    })
      .then(res => {
        dispatch(addLinkSuccess(res.data))
      })
      .catch(err => {
        dispatch(addLinkFailure(err))
      })
  }
}

export function deleteLink(id) {
  return function(dispatch) {
    return axios.delete(`/api/links/${id}`, {
      headers: { 'x-access-token': localStorage.getItem('token')}
    })
      .then(response => {
        console.log(response)
        dispatch(deleteLinkSuccess(id))
      })
      .catch(err => {
        dispatch(deleteLinkFailure(err))
      })
  }
}

export function updateLink(link) {
  return (dispatch) => {
    return axios.put(`/api/links/${link._id}`, {
      link, token: localStorage.getItem('token')
    })
      .then(res => {
        console.log('api res', res.data)
        dispatch(updateLinkSuccess(res.data))
      })
      .catch(err => {
        console.error(err)
        dispatch(updateLinkFailure(err))
      })
  }
}

