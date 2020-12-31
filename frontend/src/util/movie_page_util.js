import axios from 'axios';

//* Get / api / movie /: id - display movie page,

export const getThisMoviePage = movieId => (
  axios.get(`/api/movies/movie/${movieId}`)
)

//* get /api/movie get all movies
export const getAllMoviesPages = (movieIdx) => (
  axios.get(`/api/movies/movie`, movieIdx)
)

//* post /api/movie create movie

export const createMoviePage = (movie) => (
  axios.post(`/api/movies/movie`, movie)
)