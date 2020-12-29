import { 
  FETCH_THIS_USER, 
  FETCH_ALL_USER 
} from '../actions/user_actions';

export default function( oldState={}, action) {
  Object.freeze(oldState);
  
  switch(action.type) {
    case FETCH_THIS_USER:
      return {
        ...oldState,
        [action.user.id]: action.user
      }
    case FETCH_ALL_USER:
      return action.users
    default:
      return oldState
  }
}