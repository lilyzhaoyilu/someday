import * as APIUTIL from '../util/historylist_util'

export const RECEIVE_HISTORYLIST = 'RECEIVE_HISTORYLIST';
export const RECEIVE_HISTORYLIST_ERRORS = 'RECEIVE_HISTORYLIST_ERRORS';

const receiveHistorylist = historylist => ({
  type: RECEIVE_HISTORYLIST,
  historylist
})
const receiveErrors = errors => ({
  type: RECEIVE_HISTORYLIST_ERRORS,
  errors
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
      list => dispatch(receiveHistorylist(list)),
      err => dispatch(receiveErrors(err))
    )
)

export const shwoHistorylist = (userId) => dispatch => (
  APIUTIL.shwoHistorylist(userId)
    .then(
      list => dispatch(receiveHistorylist(list)),
      err => dispatch(receiveErrors(err))
    )
)