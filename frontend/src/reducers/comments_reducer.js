import { 
  RECEIVE_COMMENT, 
  RECEIVE_MY_COMMENTS, 
  REMOVE_COMMENT 
} from '../actions/comment_actions';

export default function(oldState={}, action) {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_COMMENT:
      return {
        ...oldState,
        [action.comment.id]: action.comment
      }
    case RECEIVE_MY_COMMENTS:
      return action.comments
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    default:
      return oldState
  }
}