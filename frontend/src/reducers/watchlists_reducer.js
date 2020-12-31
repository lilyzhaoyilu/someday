import {
  RECEIVE_THIS_WATCHLIST,
  RECEIVE_THESE_WATCHLISTS,
  DELETE_WATCHLIST
} from '../actions/watchlist_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_THIS_WATCHLIST:
      return { ...state, [action.watchlist.id]: action.watchlist }
    case RECEIVE_THESE_WATCHLISTS:
      //* fetch all watchlists of one user
      const newState = {};
      action.watchlists.data.forEach(watchlist => { newState[watchlist.id] = watchlist });
      return { ...state, ...newState };
    case DELETE_WATCHLIST:
      return { ...state, [action.watchlistId]: undefined };
    default:
      return state;
  }
}