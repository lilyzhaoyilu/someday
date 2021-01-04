import { connect } from 'react-redux';
import { updateWatchlist, getThisWatchList } from '../../actions/watchlist_actions';
import WatchlistIndexItem from './watchlist_index_item';

const mstp = (state, ownProps) => ({
  watchlists: state.entities.watchlists,
  listId: ownProps.watchlist._id
  // watchlists: Object.values(state.entities.watchlists),
  // userId: ownProps.userId
});

const mdtp = dispatch => ({
  updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
  getThisWatchList: (listId) => dispatch(getThisWatchList(listId)),
});

export default connect(mstp, mdtp)(WatchlistIndexItem);