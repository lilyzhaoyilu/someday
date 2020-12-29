import movieKey from '../util/keys/keys'
import * as APIUTIL from '../util/movie_util'


export const RECEIVE_A_MOVIE = 'RECEIVE_A_MOVIE';
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';

const receiveAMovie = (movie) => ({
  type: RECEIVE_A_MOVIE,
  movie
})

const receiveErrors = (errors) => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
})

export const fetchAMovie = (movieId) => dispatch => (
  APIUTIL.getThisMovie(movieId)
    .then(
      movie => dispatch(receiveAMovie(movie)),
      err => dispatch(receiveErrors(err))
    )
)