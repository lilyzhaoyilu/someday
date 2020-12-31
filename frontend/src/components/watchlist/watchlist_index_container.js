import { connect } from 'react-redux';
import { getMyWatchlist } from '../../actions/watchlist_actions';
import WatchlistIndex from './watchlist_index';

const mstp = (state, ownProps) => {
  return {
    watchlists: Object.values(state.entities.watchlists)
  }
};

const mdtp = dispatch => ({
  getMyWatchlist: userId => dispatch(getMyWatchlist(userId))
});

export default connect(mstp, mdtp)(WatchlistIndex);