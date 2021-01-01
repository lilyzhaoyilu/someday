import { connect } from 'react-redux';
import { showHistorylist } from '../../actions/historylist_actions';
import HistorylistIndex from './historylist_index';

const mstp = (state, ownProps) => ({
  historylist: state.entities.historylists[ownProps.userId],
  userId: ownProps.userId
});

const mdtp = dispatch => ({
  showHistorylist: userId => dispatch(showHistorylist(userId))
});

export default connect(mstp, mdtp)(HistorylistIndex)