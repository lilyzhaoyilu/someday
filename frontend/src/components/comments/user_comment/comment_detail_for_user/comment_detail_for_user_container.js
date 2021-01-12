import { connect } from 'react-redux';
import CommentDetailForUser from './comment_detail_for_user';
import { Link, withRouter } from "react-router-dom";
import {deleteComment,getUserComments} from "../../../../actions/comment_actions";
// import {getUserComments} from '../../../actions/comment_actions';
const mstp = (state, ownProps) => ({
  users: state.entities.users,
  movies: state.entities.movies,
  // comments: state.entities.comments,
  // currentUserId: state.session.user.id,
  currentPageUserId: ownProps.match.params.userId
})
const mdtp = dispatch => ({
  getUserComments: (userId) => dispatch(getUserComments(userId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
})



export default withRouter(connect(mstp, mdtp)(CommentDetailForUser));