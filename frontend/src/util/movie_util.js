import axios from 'axios';

export const getThisMovie = (movieId) => (
  axios.request(movieId)
)

