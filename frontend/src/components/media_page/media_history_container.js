import { connect } from "react-redux";
import {
  showMyHistorylists,
  updateHistorylist,
} from "../../actions/historylist_actions";
import MediaHistoryList from "./media_historyList";

const mstp = (state, ownProps) => ({
  historylists: Object.values(state.entities.historylists),
  userId: ownProps.userId,
  movieId: ownProps.movieId,
  modal: ownProps.modal,
});

const mdtp = (dispatch) => ({
  showMyHistorylists: (userId) => dispatch(showMyHistorylists(userId)),
  updateHistorylist: (watchlist) => dispatch(updateHistorylist(watchlist))
});

export default connect(mstp, mdtp)(MediaHistoryList);
