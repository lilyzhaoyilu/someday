import axios from 'axios';

//* POST / api / comment - add user comment,

export const postComment = commentData => (
  axios.post(`/api/comments`, commentData)
)

//* DELETE / api / comment /: id - delete user comments,

export const deleteComment = (commentId) => (
  axios.delete(`/api/comments/${commentId}`)
)

//TODO need work from here 

//*get /api/movie/:movieId/comment get all comments for movie

export const getMovieComments = (movieId) => (
  axios.get(`/api/comments/movie/${movieId}/comment`)
)

//* get /api/todoList/:todoListId/comment, get all comments for todoList

export const getWatchlistComments = (watchlistId) => (
  axios.get(`/api/comments/todoList/${watchlistId}/comment`)
)

//* Get / api / user/ :id / comments - display all comments from one user,

export const getUserComments = (userId) => (
  axios.get(`/api/comments/user/${userId}/comments/`)
)

//* get /api/watchedList/:watchedList_id/comment get all watchedlist comments_reducer
export const getHistorylistComments = (historylistId) => (
  axios.get(`/api/comments/watchedList/${historylistId}/comment`)
)

//* get /api/comments/comment/:id get specific comment
export const getThisComment = commentId => (
  axios.get(`/api/comments/comment/${commentId}`)
)

//* get /api/comments/all get all comments 

export const getAllComments = () =>(
  axios.get(`/api/comments/all`)
)