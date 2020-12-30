import { connect } from "react-redux";
import {
	signup,
	login,
	eraseSessionErrors,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {
	return {
		signedIn: state.session.isSignedIn,
		errors: state.errors.session,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (user) => dispatch(signup(user)),
		login: (user) => dispatch(login(user)),
		eraseSessionErrors: () => dispatch(eraseSessionErrors()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
