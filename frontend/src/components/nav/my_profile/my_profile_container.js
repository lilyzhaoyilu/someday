import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../../actions/session_actions';
import MyProfile from './my_profile';

const mstp = state => ({
  currentUser: state.session.user
});

const mdtp = dispatch => ({
  receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
});

export default connect(mstp, mdtp)(MyProfile);