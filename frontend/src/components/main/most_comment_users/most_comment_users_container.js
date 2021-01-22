import { fetchAllUsers, fetchThisUser } from '../../../actions/user_actions'
import { getAllComments } from '../../../actions/comment_actions'
import MostCommentUsers from './most_comment_users'
import { connect } from 'react-redux';


const mSTP = (state, ownProps) => ({
  users: state.entities.users,
  comments: state.entities.comments
});

const mDTP = (dispatch) => ({
  fetchThisUser: (userId) => dispatch(fetchThisUser(userId)),
  getAllComments: () => dispatch(getAllComments())

});

export default connect(mSTP, mDTP)(MostCommentUsers)