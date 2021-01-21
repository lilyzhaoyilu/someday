import { fetchAllUsers } from '../../../actions/user_actions'
import NewUserIndex from './new_user_index'
import { connect } from 'react-redux';


const mSTP = (state, ownProps) => ({
  users: state.entities.users
});

const mDTP = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mSTP, mDTP)(NewUserIndex)