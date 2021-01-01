import { connect } from 'react-redux';
import { showMyHistorylists } from '../../actions/historylist_actions';
import HistorylistIndex from './historylist_index';

const mstp = (state, ownProps) => ({
  historylists: Object.values(state.entities.historylists),
  userId: ownProps.userId
});

const mdtp = dispatch => ({
  showMyHistorylists: userId => dispatch(showMyHistorylists(userId))
});

export default connect(mstp, mdtp)(HistorylistIndex)