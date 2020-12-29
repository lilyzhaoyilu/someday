import {
  RECEIVE_USER_ERRORS,
  FETCH_THIS_USER,
} from '../actions/user_actions'
export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case FETCH_THIS_USER:
      return [];
    default:
      return state;
  }
}