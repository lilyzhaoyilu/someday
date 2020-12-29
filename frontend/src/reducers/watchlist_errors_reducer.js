import {
  RECEIVE_THIS_WATCHLIST,
  RECEIVE_THESE_WATCHLISTS,
  DELETE_WATCHLIST,
  RECEIVE_WATCHLIST_ERRORS
} from '../actions/watchlist_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_THIS_WATCHLIST:
      return [];
    case RECEIVE_THESE_WATCHLISTS:
      return [];
    case DELETE_WATCHLIST:
      return [];
    case RECEIVE_WATCHLIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
}