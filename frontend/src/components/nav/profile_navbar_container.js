import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getMyWatchlists } from "../../actions/watchlist_actions";
import { showMyHistorylists } from "../../actions/historylist_actions";
import NavBar from "./navbar";

const mapStateToProps = (state) => ({
	loggedIn: state.session.isAuthenticated,
	currUserId: state.session.user.id,
	currentUser: state.session.user.email,
	userId: state.session.user.id,
	watchlists: state.entities.watchlists,
	historylists: state.entities.historylists,
});
const mapDispatchToProps = (dispatch) => ({
	getMyWatchlists: (userId) => dispatch(getMyWatchlists(userId)),
	showMyHistorylists: (userId) => dispatch(showMyHistorylists(userId)),
	logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
