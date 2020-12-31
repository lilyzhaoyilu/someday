import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISTORYLIST_ERRORS
} from '../actions/historylist_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return [];
    case RECEIVE_HISTORYLIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
}