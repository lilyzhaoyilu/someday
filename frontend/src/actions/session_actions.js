import * as APIUTIL from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const ERASE_ERRORS = "ERASE_ERRORS";

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const eraseSessionErrors = () => ({
  type: ERASE_ERRORS
})


export const signup = (user) => dispatch => (
  APIUTIL.signup(user)
    .then(
      () => (dispatch(receiveUserSignIn())),
      err => dispatch(receiveErrors(err.response.data))
    )
);

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(
      res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUTIL.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
      }
    )
    .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const demoLogin = () => dispatch => {
  const demoUser = {
		email: "boss@boss.com",
		password: "adminboss",
  }
  

  return (
  APIUTIL.login(demoUser)
    .then(
      res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUTIL.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
      }
    )
    .catch(err => dispatch(receiveErrors(err.response.data)))
)}

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUTIL.setAuthToken(false)
  dispatch(logoutUser())
};