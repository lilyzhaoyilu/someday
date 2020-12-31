import {
  FETCH_THIS_USER,
  FETCH_ALL_USER,
  FETCH_USERS
} from '../actions/user_actions';

export default function (oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case FETCH_THIS_USER:
      return {
        ...oldState,
        [action.user.id]: action.user
      }
    case FETCH_ALL_USER:
      return action.users
    case FETCH_USERS:
      const newState = {}
      action.users.forEach(user => newState[user._id] = user)
      return { ...oldState, ...newState }
    default:
      return oldState
  }
}