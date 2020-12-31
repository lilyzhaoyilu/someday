import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserIndex from './user_index';

const mstp = state => ({
  users: Object.values(state.entities.users)
});

export default connect(mstp, { fetchAllUsers })(UserIndex);