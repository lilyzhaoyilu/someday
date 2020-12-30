import { connect } from "react-redux";
import { login, eraseSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => ({
	errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
	login: (user) => dispatch(login(user)),
	eraseSessionErrors: () => dispatch(eraseSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
