import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';



import MediaComment from './media_comment';
import {getMovieComments} from '../../../actions/comment_actions';
const mstp = (state, ownProps) => {
  return {
  comments: state.entities.comments,
  currentUserId: state.session.user.id,
  currentMovieId: ownProps.match.params.movieId,
  // currentPageUserId: ownProps. it should really be this one to fetch the user's comment based on current URL...
  }
}

const mdtp = dispatch => ({
  getMovieComments: (movieId) => dispatch(getMovieComments(movieId)),
})



export default withRouter(connect(mstp, mdtp)(MediaComment));