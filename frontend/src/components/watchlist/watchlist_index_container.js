import { connect } from 'react-redux';
import { getAllWatchlists } from '../../actions/watchlist_actions';
import WatchlistIndex from './watchlist_index';

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists),
  userId: ownProps.userId
});

const mdtp = dispatch => ({
  getAllWatchlists: () => dispatch(getAllWatchlists())
});

export default connect(mstp, mdtp)(WatchlistIndex);