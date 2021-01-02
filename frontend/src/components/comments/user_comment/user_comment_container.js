import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import UserComment from './user_comment';

import {getUserComments} from '../../../actions/comment_actions';
import {fetchMovieData} from '../../../actions/movie_actions';
const mstp = (state, ownProps) => {
  return{
  users: state.entities.users,
  comments: state.entities.comments,
  currentUserId: state.session.user.id,
  currentPageUserId: ownProps.match.params.userId,
}}
const mdtp = dispatch => ({
  getUserComments: (userId) => dispatch(getUserComments(userId)),
  fetchMovieData: (movieId) => dispatch(fetchMovieData(movieId)),
})



export default withRouter(connect(mstp, mdtp)(UserComment));