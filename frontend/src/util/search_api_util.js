import axios from 'axios';

//* get /api/search/list search watchedlist/todolit with name

export const searchLists = (listName) => (
  axios.get('/api/search/list', listName)
)

//* get /api/search/movie search movies with name

export const searchMovies = searchResult => (
  axios.get('/api/search/movie', searchResult)
)

//* get /api/search/handle search users with handle

export const searchUsers = userHandle => (
  axios.get('/api/search/handle', userHandle)
)