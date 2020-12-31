import * as APIUTIL from '../util/show_util'

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_POPULAR_SHOWS = "RECEIVE_POPULAR_SHOWS"
export const RECEIVE_A_SHOW = 'RECEIVE_A_SHOW';
export const RECEIVE_SHOW_ERRORS = 'RECEIVE_SHOW_ERRORS';

const receiveAShow = (show) => ({
  type: RECEIVE_A_SHOW,
  show
})

const receiveShows = (shows) => ({
  type: RECEIVE_SHOWS,
  shows
})

const receivePopularShows = (shows) => ({
  type: RECEIVE_POPULAR_SHOWS,
  shows
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SHOW_ERRORS,
  errors
})



export const fetchShowData = (movieId) => dispatch => (
  APIUTIL.fetchShowData(movieId)
    .then(
      show => dispatch(receiveAShow(show)),
      err => dispatch(receiveErrors(err))
    )
)

export const fetchPopularTv = () => dispatch => (
  APIUTIL.getMostPopularTV()
    .then(
      tvs => dispatch(receivePopularShows(tvs)),
      err => dispatch(receiveErrors(err))
    )
)
