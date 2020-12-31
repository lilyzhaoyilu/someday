import { 
  RECEIVE_COMMENT, 
  RECEIVE_COMMENTS, 
  REMOVE_COMMENT 
} from '../actions/comment_actions';

export default function(oldState={}, action) {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  // console.log(action);
  switch (action.type) {
    case RECEIVE_COMMENT:
      Object.assign(newState,{[action.comment.data._id]: action.comment.data})
      return newState;
    case RECEIVE_COMMENTS:
      action.comments.data.forEach(comment => Object.assign(newState,{[comment._id]: comment})); 
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    default:
      return oldState
  }
}