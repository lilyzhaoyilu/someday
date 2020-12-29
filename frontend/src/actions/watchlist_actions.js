import * as APIUTIL from '../util/watchlist_util';

export const RECEIVE_THIS_WATCHLIST = 'RECEIVE_THIS_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';
export const RECEIVE_THESE_WATCHLISTS = 'RECEIVE_THESE_WATCHLISTS';

const receiveThisWatchlist = watchlist => ({
  type: RECEIVE_THIS_WATCHLIST,
  watchlist
})

const receiveTheseWatchlists = watchlists => ({
  type: RECEIVE_THESE_WATCHLISTS,
  watchlists
})

const removeWatchlist = watchlistId => ({
  type: DELETE_WATCHLIST,
  watchlistId
})


const receiveErrors = errors => ({
  type: RECEIVE_WATCHLIST_ERRORS,
  errors
})

export const postWatchlist = (watchlist) => dispatch => (
  APIUTIL.postWatchlist(watchlist)
    .then(
      watchlist => dispatch(receiveThisWatchlist(watchlist)),
      err => dispatch(receiveErrors(err)),
    )
)

export const updateWatchlist = (watchlist) => dispatch => (
  APIUTIL.updateWatchlist(watchlist)
    .then(
      watchlist => dispatch(receiveThisWatchlist(watchlist)),
      err => dispatch(receiveErrors(err))
    )
)

export const deleteWatchlist = (watchlistId) => dispatch => (
  APIUTIL.deleteWatchlist(watchlistId)
    .then(
      () => dispatch(removeWatchlist(watchlistId)),
      err => dispatch(receiveErrors(err))
    )
)
//! confirm with rex
export const getMyWatchlist = (userId) => dispatch => (
  APIUTIL.getMyWatchlist(userId)
    .then(
      watchlists => dispatch(receiveTheseWatchlists(watchlists)),
      err => dispatch(receiveErrors(err))
    )
)