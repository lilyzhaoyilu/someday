import * as USERAPI from '../util/user_api_util'
import {RECEIVE_CURRENT_USER} from './session_actions'

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const FETCH_THIS_USER = "FETCH_THIS_USER";
export const FETCH_ALL_USER = "FETCH_ALL_USER";

const updateUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
})

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

const receiveThisUser = user =>({
  type: RECEIVE_THIS_USER,
  user
})
