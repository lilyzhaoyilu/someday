import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions'
import MovieImage from './movie_img';

const mstp = (state, ownProps) => ({
  movieId: ownProps.movieId
})

const mdtp = dispatch => ({
  updateWatchlist: (watchlistObj) => dispatch(updateWatchlist(watchlistObj)),
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId)),
  deleteWatchlistItem: (listId, movieId) => dispatch(deleteWatchlistItem(listId, movieId)),
  getThisWatchList: (listId) => dispatch(getThisWatchList(listId)),
})

export default connect(mstp, mdtp)(MovieImage)