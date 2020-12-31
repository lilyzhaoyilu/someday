import { connect } from 'react-redux';

import CommentDetail from './comment_detail';

// import {getUserComments} from '../../../actions/comment_actions';
const mstp = (state, ownProps) => ({
  // comments: state.entities.comments,
  // currentUserId: state.session.user.id,
  // currentPageUserId: ownProps. it should really be this one to fetch the user's comment based on current URL...
})
const mdtp = dispatch => ({
  // getUserComments: (userId) => dispatch(getUserComments(userId)),
})



export default connect(mstp, mdtp)(CommentDetail);