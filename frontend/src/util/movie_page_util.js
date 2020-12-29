import axios from 'axios';

//* Get / api / MoviePages /: id - display movie page,

export const getThisMoviePage = movieId => (
  axios.get(`/api/MoviePages/${movieId}`)
)