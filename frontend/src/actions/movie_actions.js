import * as APIUTIL from '../util/movie_util'

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

export const fetchPopularMovies = () => dispatch => (
  APIUTIL.getMostPopularMovies()
    .then(
      movies => dispatch(receivePopularShows(movies)),
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

export const searchShows = (input) => dispatch => (
  APIUTIL.searchShow(input)
    .then(
      shows => dispatch(receiveShows(shows)),
      err => dispatch(receiveErrors(err))
    )
)

export const fetchAllShows = () => dispatch => (
  APIUTIL.fetchAllShows()
    .then(
      shows => {
        console.log(shows);
        return dispatch(receiveShows(shows))
      },
      err => dispatch(receiveErrors(err))
    )
)