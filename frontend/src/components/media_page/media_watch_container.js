import { connect } from "react-redux";
import {
  getMyWatchlists,
  updateWatchlist,
} from "../../actions/watchlist_actions";
import MediaWatchList from "./media_watchList";

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists),
  userId: ownProps.userId,
  movieId: ownProps.movieId,
});

const mdtp = (dispatch) => ({
  getMyWatchlists: (userId) => dispatch(getMyWatchlists(userId)),
  updateWatchlist: (movieId) => dispatch(updateWatchlist(movieId)),
});

export default connect(mstp, mdtp)(MediaWatchList);
