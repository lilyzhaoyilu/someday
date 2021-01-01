import { connect } from 'react-redux';
import { fetchMovieData } from "../../actions/movie_actions";
import {
  getMyWatchlists,
  postWatchlist,
  updateWatchlist,
} from "../../actions/watchlist_actions";
import {
  showMyHistorylists,
  updateHistorylist,
  postHistorylist,
} from "../../actions/historylist_actions";
import MediaPage from "./media_page";

const mapStateToProps = (state, ownProps) => ({
     movieId: ownProps.match.params.movieId,
    userId: state.session.user.id
    
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieData: (movieId) => dispatch(fetchMovieData(movieId)),
  getMyWatchlists: (userId) => dispatch(getMyWatchlists(userId)),
  postWatchlist: (watchlist) => dispatch(postWatchlist(watchlist)),
  updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
  showMyHistorylists: (userId) => dispatch(showMyHistorylists(userId)),
  updateHistorylist: (historylist) => dispatch(updateHistorylist(historylist)),
  postHistorylist: (historylist) => dispatch(postHistorylist(historylist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage);