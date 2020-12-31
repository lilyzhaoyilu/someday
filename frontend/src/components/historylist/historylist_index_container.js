import { connect } from 'react-redux';
import { showUserHistorylist } from '../../actions/historylist_actions';
import HistorylistIndex from './historylist_index';

const mstp = (state, ownProps) => ({
  historylist: state.entities.historylists[ownProps.userId]
});

const mdtp = dispatch => ({
  showUserHistorylist: userId => dispatch(showUserHistorylist(userId))
});

export default connect(mstp, mdtp)(HistorylistIndex)