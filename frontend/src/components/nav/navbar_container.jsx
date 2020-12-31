import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";

const mapStateToProps = (state) => ({
	loggedIn: state.session.isAuthenticated,
	// currentUserId: state.session.
});
export default connect(mapStateToProps, { logout })(NavBar);
