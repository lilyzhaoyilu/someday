import { connect } from 'react-redux';
import {updateWatchlist } from '../../actions/watchlist_actions';
import WatchlistIndexItem from './watchlist_index_item';

const mstp = (state, ownProps) => ({
  // watchlists: Object.values(state.entities.watchlists),
  // userId: ownProps.userId
});

const mdtp = dispatch => ({
  updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
});

export default connect(mstp, mdtp)(WatchlistIndexItem);