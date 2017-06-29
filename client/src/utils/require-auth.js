import axios from 'axios';

export function requireAuth(nextState, replace) {
  var token = localStorage.getItem('token');
  if (token === null) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export function isAuthenticated() {
  // return axios.get('/api/testAuth', {
  //   headers: { 'x-access-token': localStorage.getItem('token') }
  // }).then((response) => {
  //   return (response.data.success) ? true : false;
  // }).catch(err => {
  //   if(err) return (err);
  // })
  return (localStorage.getItem('token')) ? true : false;
}
