import {
  RECEIVE_THIS_WATCHLIST,
  RECEIVE_THESE_WATCHLISTS,
  DELETE_WATCHLIST
} from '../actions/watchlist_actions'
import {
  RECEIVE_USER_LOGOUT,
} from '../actions/session_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_THIS_WATCHLIST:
      return { ...state, [action.watchlist.data._id]: action.watchlist.data };
    case RECEIVE_THESE_WATCHLISTS:
      const newState = {};
      action.watchlists.data.forEach(
        (watchlist) => (newState[watchlist._id] = watchlist)
      );
      return { ...state, ...newState };
    case DELETE_WATCHLIST:
      return { ...state, [action.watchlistId]: undefined };
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}