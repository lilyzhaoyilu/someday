import { connect } from 'react-redux';
import { getMyWatchlists, updateWatchlist } from '../../actions/watchlist_actions';
import WatchlistIndex from './watchlist_index';

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists),
  userId: ownProps.userId
});

const mdtp = dispatch => ({
  getMyWatchlists: (userId) => dispatch(getMyWatchlists(userId)),
  updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
});

export default connect(mstp, mdtp)(WatchlistIndex);