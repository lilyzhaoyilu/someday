import {
  FETCH_THIS_USER,
  FETCH_ALL_USER,
  RECEIVE_USERS
} from '../actions/user_actions';

export default function (oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case FETCH_THIS_USER:
      return {
        ...oldState,
        [action.user.data._id]: action.user.data
      }
    case FETCH_ALL_USER:
      const newState = {};
      action.users.data.forEach(user => {
        newState[user._id] = user
      })
      return { ...oldState, ...newState }
    case RECEIVE_USERS:
      newState = {}
      action.users.data.forEach(user => newState[user._id] = user)
      return { ...oldState, ...newState }
    default:
      return oldState
  }
}