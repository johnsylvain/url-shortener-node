export default function requireAuth(nextState, replace) {
  var token = localStorage.getItem('token');
  if (token === null) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
