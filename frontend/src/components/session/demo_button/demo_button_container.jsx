import { connect } from "react-redux";
import { login } from "../../../actions/session_actions";
import DemoButton from "./demo_button";
const mSTP = (state, ownProps) => ({
	demoUser: {
		email: "boss@boss.com",
		password: "adminboss",
	},
});

const mDTP = (dispatch) => ({
	login: () => dispatch(login),
});

export default connect(mSTP, mDTP)(DemoButton);
