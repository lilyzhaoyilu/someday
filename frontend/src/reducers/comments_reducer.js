import { 
  RECEIVE_COMMENT, 
  RECEIVE_COMMENTS, 
  REMOVE_COMMENT 
} from '../actions/comment_actions';

import {
  RECEIVE_USER_LOGOUT,
} from '../actions/session_actions';

export default function(oldState={}, action) {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_COMMENT:
      Object.assign(newState,{[action.comment.data._id]: action.comment.data})
      return newState;
    case RECEIVE_COMMENTS:
      let tempState = {};
      action.comments.data.forEach(comment => Object.assign(tempState,{[comment._id]: comment})); 
      return tempState;
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState
  }
}