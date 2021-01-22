import * as APIUTIL from '../util/historylist_util'

export const RECEIVE_HISTORYLIST = 'RECEIVE_HISTORYLIST';
export const RECEIVE_HISTORYLIST_ERRORS = 'RECEIVE_HISTORYLIST_ERRORS';
export const RECEIVE_HISTORYLISTS = 'RECEIVE_HISTORYLISTS';
export const RECEIVE_LISTS_AS_ARRAY = 'RECEIVE_LISTS_AS_ARRAY';

const receiveHistorylist = historylist => ({
  type: RECEIVE_HISTORYLIST,
  historylist
})

const receiveHistorylists = historylists => ({
  type: RECEIVE_HISTORYLISTS,
  historylists
})

const receiveErrors = errors => ({
  type: RECEIVE_HISTORYLIST_ERRORS,
  errors
})

const receiveListsAsArray = lists => ({
  type: RECEIVE_LISTS_AS_ARRAY,
  lists
})

export const postHistorylist = (historylist) => dispatch => (
  APIUTIL.postHistorylist(historylist)
    .then(
      list => dispatch(receiveHistorylist(list)),
      err => dispatch(receiveErrors(err))
    )
)

export const updateHistorylist = (historylist) => dispatch => (
  APIUTIL.updateHistorylist(historylist)
    .then(
      list => {
        // console.log(list);
        dispatch(receiveHistorylist(list))
      },
      err => dispatch(receiveErrors(err))
    )
)

export const showMyHistorylists = (userId) => dispatch => (
  APIUTIL.showMyHistorylists(userId)
    .then(
      lists => dispatch(receiveHistorylists(lists)),
      err => dispatch(receiveErrors(err))
    )
)

export const showHistorylist = (listId) => dispatch => (
  APIUTIL.showHistorylist(listId)
    .then(
      list => dispatch(receiveHistorylist(list)),
      err => dispatch(receiveErrors(err))
    )
)

export const getAllHistorylists = () => dispatch => (
  APIUTIL.getAllHistorylists()
    .then(
      lists => dispatch(receiveHistorylists(lists)),
      err => dispatch(receiveErrors(err))
    )
)



export const getHistorylistsBasedOnMovieId = (movieId) => dispatch => (
  APIUTIL.getHistoryListBasedOnMovieId(movieId)
    .then(
      // (lists) => (console.log(lists.data)),
      lists => dispatch(receiveListsAsArray(lists.data)),
      err => dispatch(receiveErrors(err))
    )
)