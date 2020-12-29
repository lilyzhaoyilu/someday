import { connect } from "react-redux";

import Splash from "./splash";

const mapStateToProps = (state) => ({
	// errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
	// login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
