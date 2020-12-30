import { connect } from 'react-redux';
import { getMyWatchlist } from '../../actions/watchlist_actions';
import WatchlistIndex from './watchlist_index';

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists[ownProps.match.params.userId])
});

const mdtp = dispatch => ({
  getMyWatchlist: userId => dispatch(getMyWatchlist(userId))
});

export default connect(mstp, mdtp)(WatchlistIndex);