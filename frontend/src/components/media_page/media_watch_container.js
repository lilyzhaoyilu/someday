import { connect } from "react-redux";
import { getMyWatchlists } from "../../actions/watchlist_actions";
import MediaWatchList from "./media_watchList";

const mstp = (state, ownProps) => ({
  watchlists: Object.values(state.entities.watchlists),
  userId: ownProps.userId,
  movieId: ownProps.movieId,
});

const mdtp = (dispatch) => ({
  getMyWatchlists: (userId) => dispatch(getMyWatchlists(userId)),
});

export default connect(mstp, mdtp)(MediaWatchList);
