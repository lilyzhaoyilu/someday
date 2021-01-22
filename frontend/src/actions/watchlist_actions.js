import * as APIUTIL from '../util/watchlist_util';

export const RECEIVE_THIS_WATCHLIST = 'RECEIVE_THIS_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';
export const RECEIVE_THESE_WATCHLISTS = 'RECEIVE_THESE_WATCHLISTS';
export const RECEIVE_LISTS_AS_ARRAYW = 'RECEIVE_LISTS_AS_ARRAYW';


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

const receiveListsAsArrayW = lists => ({
  type: RECEIVE_LISTS_AS_ARRAYW,
  lists
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



export const getMyWatchlists = (userId) => dispatch => (
  APIUTIL.getMyWatchlists(userId)
    .then(
      watchlists => dispatch(receiveTheseWatchlists(watchlists)),
      err => dispatch(receiveErrors(err))
    )
)

export const getAllWatchlists = () => dispatch => (
  APIUTIL.getAllWatchlists()
    .then(
      watchlists => dispatch(receiveTheseWatchlists(watchlists)),
      err => dispatch(receiveErrors(err))
    )
)

export const getThisWatchList = (listId) => dispatch => (
  APIUTIL.getThisWatchList(listId)
    .then(
      watchlist => dispatch(receiveThisWatchlist(watchlist)),
      err => dispatch(receiveErrors(err))
    )
)


////
export const deleteWatchlistItem = (listId, movieId) => dispatch => {
  // debugger;
  return (
    APIUTIL.deleteWatchlistItem(listId, movieId)
      .then(
        watchlist => dispatch(receiveThisWatchlist(watchlist)),
        err => dispatch(receiveErrors(err))
      )
  )
}


export const getWatchlistsBasedOnMovieId = (movieId) => dispatch => (
  APIUTIL.getWatchListBasedOnMovieId(movieId)
    .then(
      watchlists => dispatch(receiveListsAsArrayW(watchlists)),
      err => dispatch(receiveErrors(err))
    )
)
