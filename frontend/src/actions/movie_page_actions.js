import * as APIUTIL from '../util/movie_page_util'

export const RECEIVE_MOVIE_PAGE = 'RECEIVE_MOVIE_PAGE';
export const RECEIVE_MOVIE_PAGES = 'RECEIVE_MOVIE_PAGES';
export const RECEIVE_MP_ERRORS = 'RECEIVE_MP_ERRORS';

const fetchMoviePage = moviePage => ({
  type: RECEIVE_MOVIE_PAGE,
  moviePage
})

const fetchMoviePages = moviePages => ({
  type: RECEIVE_MOVIE_PAGES,
  moviePages
})

const receiveErrors = errors => ({
  type: RECEIVE_MP_ERRORS,
  errors
})

export const getThisMoviePage = movieId => dispatch => (
  APIUTIL.getThisMoviePage(movieId)
    .then(
      page => dispatch(fetchMoviePage(page)),
      err => dispatch(receiveErrors(err)),
    )
)
//* get 10 moviepages base on index
export const receiveMoviePages = movieIdx => dispatch => (
  APIUTIL.getAllMoviesPages(movieIdx)
    .then(
      pages => dispatch(fetchMoviePages(pages)),
      err => dispatch(receiveErrors(err))
    )
)

export const createMoviePage = page => dispatch => (
  APIUTIL.createMoviePage(page)
    .then(
      page => dispatch(fetchMoviePage(page)),
      err => dispatch(receiveErrors(err))
    )
)