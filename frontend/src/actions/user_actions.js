import * as USERAPI from '../util/user_api_util'
import * as SEARCHAPI from '../util/search_api_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const FETCH_THIS_USER = "FETCH_THIS_USER";
export const FETCH_ALL_USER = "FETCH_ALL_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const CLEAR_USERS = "CLEAR_USERS";

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

const receiveThisUser = user => ({
  type: FETCH_THIS_USER,
  user
})

const receiveAllUsers = users => ({
  type: FETCH_ALL_USER,
  users
})

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const clearUsers = () => ({
  type: CLEAR_USERS
})

export const update = (user) => dispatch => (
  USERAPI.updateProfile(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err))
    )
);

export const fetchAllUsers = () => dispatch => (
  USERAPI.getAllUsers()
    .then(
      users => dispatch(receiveAllUsers(users)),
      err => dispatch(receiveErrors(err))
    )
)

export const fetchThisUser = userId => dispatch => (
  USERAPI.getThisUser(userId)
    .then(
      user => dispatch(receiveThisUser(user)),
      err => dispatch(receiveErrors(err))
    )
)

export const searchUsers = handle => dispatch => (
  SEARCHAPI.searchUsers(handle)
    .then(
      users => dispatch(receiveUsers(users)),
      err => dispatch(receiveErrors(err))
    )
)