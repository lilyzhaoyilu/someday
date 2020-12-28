import axios from 'axios';

//* POST / api / comment - add user comment,

export const postComment = commentData => (
  axios.post(`/api/comment`, commentData)
)

//* Get / api / comments /: id - display all comments,

export const indexOfComments = () => (
  axios.post(`/api/comments/`)
)

//* DELETE / api / comment /: id - delete user comments,

export const deleteComment = (commentId) => (
  axios.delete(`/api/comment/${commentId}`)
)
