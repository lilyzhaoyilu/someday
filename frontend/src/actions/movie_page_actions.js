import * as APIUTIL from '../util/movie_page_util'

export const RECEIVE_MOVIE_PAGE = 'RECEIVE_MOVIE_PAGE';
export const RECEIVE_MP_ERRORS = 'RECEIVE_MP_ERRORS';

const fetchMoviePage = moviePage => ({
  type: RECEIVE_MOVIE_PAGE,
  moviePage
})

const receiveErrors = errors => ({
  type: RECEIVE_MP_ERRORS,
  errors
})

export const receiveMoviePage = movieId => dispatch => (
  APIUTIL.getThisMoviePage(movieId)
    .then(
      page => dispatch(fetchMoviePage(page)),
      err => dispatch(receiveErrors(err)),
    )
)