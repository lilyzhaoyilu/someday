import { connect } from 'react-redux';
import CommentDetailForMedia from './comment_detail_for_media';

// import {getUserComments} from '../../../actions/comment_actions';
const mstp = (state, ownProps) => ({
  users: state.entities.users
  // comments: state.entities.comments,
  // currentUserId: state.session.user.id,
  // currentPageUserId: ownProps. it should really be this one to fetch the user's comment based on current URL...
})
const mdtp = dispatch => ({
  // fetchThisUser: (userId) => dispatch(fetchThisUser(userId)),
})



export default connect(mstp, mdtp)(CommentDetailForMedia);