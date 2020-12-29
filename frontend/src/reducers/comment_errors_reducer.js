import {
  RECEIVE_COMMENT,
  RECEIVE_MY_COMMENTS,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
} from '../actions/comment_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return [];
    case RECEIVE_MY_COMMENTS:
      return [];
    case REMOVE_COMMENT:
      return [];
    default:
      return state;
  }
}