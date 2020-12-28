import * as APIUTIL from '../util/watchlist_util';

export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';


const receiveThisWatchlist = watchlist => ({
  type: RECEIVE_THIS_WATCHLIST,
  watchlist
})


const deleteWatchlist = watchlistId => ({
  type: DELETE_WATCHLIST,
  watchlistId
})


const receiveErrors = errors => ({
  type: RECEIVE_WATCHLIST_ERRORS,
  errors
})