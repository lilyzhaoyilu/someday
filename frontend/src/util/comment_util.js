import axios from 'axios';

//* POST / api / comment - add user comment,

export const postComment = commentData => (
  axios.post(`/api/comment`, commentData)
)



//* DELETE / api / comment /: id - delete user comments,

export const deleteComment = (commentId) => (
  axios.delete(`/api/comment/${commentId}`)
)

//TODO need work from here 

//*get /api/movie/:movieId/comment get all comments

export const getMovieComments = (movieId) => (
  axios.get(`api/movie/${movieId}/comment`)
)

//* get /api/todoList/:todoListId/comment, get all comments for todoList

export const getWatchlistComments = (watchlistId) => (
  axios.get(`/api/todoList/${watchlistId}`)
)

//* Get / api / user/ :id / comments - display all comments from one user,

export const getUserComments = (userId) => (
  axios.get(`/api/user/${userId}/comments/`)
)