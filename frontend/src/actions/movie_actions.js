import * as APIUTIL from '../util/movie_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_POPULAR_MOVIES = "RECEIVE_POPULAR_MOVIES"
export const RECEIVE_A_MOVIE = 'RECEIVE_A_MOVIE';
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_SHOW_ERRORS';

const receiveAMovie = (show) => ({
  type: RECEIVE_A_MOVIE,
  show
})

const receiveMovies = (shows) => ({
  type: RECEIVE_MOVIES,
  shows
})

const receivePopularMovies = (shows) => ({
  type: RECEIVE_POPULAR_MOVIES,
  shows
})

const receiveErrors = (errors) => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
})



export const fetchMovieData = (movieId) => dispatch => (
  APIUTIL.fetchMovieData(movieId)
    .then(
      show => dispatch(receiveAMovie(show)),
      err => dispatch(receiveErrors(err))
    )
)

export const fetchPopularMovies = () => dispatch => (
  APIUTIL.getMostPopularMovies()
    .then(
      movies => dispatch(receivePopularMovies(movies)),
      err => dispatch(receiveErrors(err))
    )
)


export const searchShows = (input) => dispatch => (
  APIUTIL.searchShow(input)
    .then(
      shows => dispatch(receiveMovies(shows)),
      err => dispatch(receiveErrors(err))
    )
)

export const fetchAllShows = () => dispatch => (
  APIUTIL.fetchAllShows()
    .then(
      shows => {
        return dispatch(receiveShows(shows))

      },
      err => dispatch(receiveErrors(err))
    )
)