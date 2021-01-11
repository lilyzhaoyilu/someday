import { connect } from "react-redux";
import {
	login,
	eraseSessionErrors,
	demoLogin,
} from "../../actions/session_actions";
import LoginForm from "./login_form";



const mapStateToProps = (state) => ({
	errors: state.errors.session,
	loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
	login: (user) => dispatch(login(user)),
	eraseSessionErrors: () => dispatch(eraseSessionErrors()),
	demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
