import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions';
import {updateWatchlist,deleteWatchlistItem } from '../../actions/watchlist_actions';
import WatchlistItemDetail from './watchlist_item_detail';

const mstp = (state, ownProps) => ({
  movieId: ownProps.movieId
});

const mdtp = dispatch => ({
  updateWatchlist: (watchlistObj) => dispatch(updateWatchlist(watchlistObj)),
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId)),
  deleteWatchlistItem: (listId, movieId) => dispatch(deleteWatchlistItem(listId, movieId))
});

export default connect(mstp, mdtp)(WatchlistItemDetail);