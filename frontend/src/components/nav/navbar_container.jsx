import { connect } from "react-redux";
import { logout, eraseSessionErrors } from "../../actions/session_actions";
import NavBar from "./navbar";


const mapStateToProps = (state) => ({
	loggedIn: state.session.isAuthenticated,
});

const mdtp = dispatch => ({
	logout: () => dispatch(logout()),
	eraseSessionErrors: () => dispatch(eraseSessionErrors())
});

export default connect(mapStateToProps, mdtp)(NavBar);
