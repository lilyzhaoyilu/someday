import axios from 'axios';

//* POST / api / comment - add user comment,

export const postComment = commentData => (
  axios.post(`/api/comment`, commentData)
)

//* Get / api / user/ :id / comments - display all comments,

export const indexOfComments = (userId) => (
  axios.get(`/api/user/${userId}/comments/`)
)

//* DELETE / api / comment /: id - delete user comments,

export const deleteComment = (commentId) => (
  axios.delete(`/api/comment/${commentId}`)
)


