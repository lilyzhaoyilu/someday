import axios from 'axios';

//* get /api/search/list search watchedlist/todolit with name

export const searchLists = (list) => (
  axios.get('/api/search/search/list', list)
)

// //* get /api/search/movie search movies with name

// export const searchMovies = searchResult => (
//   axios.get('/api/search/movie', searchResult)
// )

//* get /api/search/handle search users with handle

export const searchUsers = handle => (
  axios.get('/api/search/search/handle', handle)
)