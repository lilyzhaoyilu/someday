import { connect } from 'react-redux';
import { postComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form.jsx';

const mstp = state => ({
  // movies: Object.values(state.entities.movies)
})
const mdtp = dispatch => ({
  postComment: comment => dispatch(postComment(comment)),
})

export default connect(mstp, mdtp)(CommentForm);