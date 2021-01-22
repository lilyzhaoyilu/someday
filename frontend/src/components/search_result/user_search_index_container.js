import { connect } from 'react-redux';
import { clearUsers } from '../../actions/user_actions';
import UserSearchIndex from './user_search_index';
import { searchUsers, fetchAllUsers } from '../../actions/user_actions'

const mstp = (state, ownProps) => {
  // console.log(ownProps.history);
  return {
    users: Object.values(state.entities.users),
    loggedIn: state.session.isAuthenticated
  }
}
const mdtp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  searchUsers: input => dispatch(searchUsers(input)),
  clearUsers: () => dispatch(clearUsers())
})

export default connect(mstp, mdtp)(UserSearchIndex); 