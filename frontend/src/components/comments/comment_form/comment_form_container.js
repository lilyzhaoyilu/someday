import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { postComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form.jsx';

const mstp = (state, ownProps) => {
  return {
  comments: state.entities.comments,
  currentUserId: state.session.user.id,
  currentMovieId: ownProps.match.params.movieId,
  // currentPageUserId: ownProps. it should really be this one to fetch the user's comment based on current URL...
  }
}
const mdtp = dispatch => ({
  
  postComment: comment => dispatch(postComment(comment)),
})

export default  withRouter(connect(mstp, mdtp)(CommentForm));