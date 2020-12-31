import { connect } from 'react-redux';
import { showHistorylist } from '../../actions/historylist_actinos';
import HistorylistIndex from './historylist_index';

const mstp = state => ({
  historylist: state.entities.historylists[ownProps.match.params.userId]
});

const mdtp = dispatch => ({
  showHistorylist: userId => dispatch(showHistorylist(userId))
});

export default connect(mstp, mdtp)(HistorylistIndex)