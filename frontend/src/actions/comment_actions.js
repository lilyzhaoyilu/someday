import * as APIUTIL from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_MY_COMMENTS = 'RECEIVE_MY_COMMENTS';
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

const receiveMyComments = comments => ({
  type: RECEIVE_MY_COMMENTS,
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

export const getUserComments = userId => dispatch => (
  APIUTIL.getUserComments(userId)
    .then(
      comments => dispatch(receiveMyComments(comments)),
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