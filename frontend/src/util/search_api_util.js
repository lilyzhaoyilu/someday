import axios from 'axios';

//* get /api/search/list search watchedlist/todolit with name
//! DO NOT use this. Need to sepaqrate 2 types of lists
export const searchLists = (listName) => (
  axios.get('/api/search/search/list', listName)
)

// //* get /api/search/movie search movies with name

// export const searchMovies = searchResult => (
//   axios.get('/api/search/search/movie', searchResult)
// )

//* get /api/search/handle search users with handle

export const searchUsers = userHandle => (
  axios.get('/api/search/search/handle', userHandle)
)