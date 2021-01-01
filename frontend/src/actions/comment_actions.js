import * as APIUTIL from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const remove_comment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const postComment = comment => dispatch => (
  APIUTIL.postComment(comment)
    .then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err))
    )
)

export const deleteComment = commentId => dispatch => (
  APIUTIL.deleteComment(commentId)
    .then(
      () => dispatch => dispatch(remove_comment(commentId)),
      err => dispatch(receiveErrors(err))
    )
)

export const getMovieComments = movieId => dispatch => (
  APIUTIL.getMovieComments(movieId)
    .then(
      comments => dispatch(receiveComments(comments)),
      err => dispatch(receiveErrors(err))
    )
)

export const getWatchlistComments = listId => dispatch => (
  APIUTIL.getWatchlistComments(listId)
    .then(
      comments => dispatch(receiveComments(comments)),
      err => dispatch(receiveErrors(err))
    )
)

export const getUserComments = userId => dispatch => (
  APIUTIL.getUserComments(userId)
    .then(
      comments => dispatch(receiveComments(comments)),
      err => dispatch(receiveErrors(err))
    )
)


// export const getMovieComments = movieId => dispatch => (
//   APIUTIL.getMovieComments(movieId)
//     .then(
//       comments => dispatch(receiveComments(comments)),
//       err => dispatch(receiveErrors(err))
//     )
// )


// export const deleteComment = commentId => dispatch => (
//   APIUTIL.deleteComment(commentId)
//     .then(
//       comments => dispatch(receiveComments(comments)),
//       err => dispatch(receiveErrors(err))``
//     )
// )

export const getThisComment = commentId => dispatch => (
  APIUTIL.getThisComment(commentId)
    .then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err))
    )
)