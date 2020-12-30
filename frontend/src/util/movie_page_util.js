import axios from 'axios';

//* Get / api / movie /: id - display movie page,

export const getThisMoviePage = movieId => (
  axios.get(`/api/movie/${movieId}`)
)

//* get /api/movie get all movies
export const getAllMoviesPages = () => (
  axios.get(`/api/movie`)
)

//* post /api/movie create movie

export const createMoviePage = (movie) => (
  axios.post(`/api/movie`, movie)
)