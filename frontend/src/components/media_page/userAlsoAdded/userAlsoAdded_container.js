import { connect } from 'react-redux';
import UserAlsoAdded from './userAlsoAdded';
import {getHistorylistsBasedOnMovieId,} from "../../../actions/historylist_actions";
import {getWatchlistsBasedOnMovieId,} from "../../../actions/watchlist_actions";
import {fetchThisUser} from "../../../actions/user_actions";

const mstp = state => ({
  usersAlsoAddedArray: Object.values(state.entities.usersAlsoAdded),
  users: state.entities.users
});

const mdtp = dispatch => ({
  getHistorylistsBasedOnMovieId: (movieId) => dispatch(getHistorylistsBasedOnMovieId(movieId)),
  getWatchlistsBasedOnMovieId: (movieId) => dispatch(getWatchlistsBasedOnMovieId(movieId)),
  fetchThisUser: (userId) => dispatch(fetchThisUser(userId))

});

export default connect(mstp, mdtp)(UserAlsoAdded);