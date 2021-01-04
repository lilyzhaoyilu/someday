import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions';
import { updateWatchlist, deleteWatchlistItem, getThisWatchList } from '../../actions/watchlist_actions';
import WatchlistItemDetail from './watchlist_item_detail';

const mstp = (state, ownProps) => ({
  listId: ownProps.listId
});

const mdtp = dispatch => ({
  updateWatchlist: (watchlistObj) => dispatch(updateWatchlist(watchlistObj)),
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId)),
  deleteWatchlistItem: (listId, movieId) => dispatch(deleteWatchlistItem(listId, movieId)),
  getThisWatchList: (listId) => dispatch(getThisWatchList(listId)),
});

export default connect(mstp, mdtp)(WatchlistItemDetail);