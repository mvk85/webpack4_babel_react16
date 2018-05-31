export function getTokenFromLocalStorage() {
  return localStorage.getItem('jwt_token');
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('jwt_token', token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('jwt_token');
}
