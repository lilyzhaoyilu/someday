import { connect } from 'react-redux';
import { fetchThisUser } from '../../actions/user_actions';
import ProfileShow from './profile_show';

const mstp = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mdtp = dispatch => ({
  fetchThisUser: userId => dispatch(fetchThisUser(userId))
})

export default connect(mstp, mdtp)(ProfileShow)