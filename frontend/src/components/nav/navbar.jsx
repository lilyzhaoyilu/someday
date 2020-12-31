import React from "react";
import { Link, withRouter } from "react-router-dom";
import DemoButtonContainer from "../session/demo_button/demo_button_container";
import SearchBarContainer from "./search_bar/search_bar_container";
import Logo from '../../util/somedaylogo.svg';

class NavBar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		// this.getLinks = this.getLinks.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	// getLinks() {
	// 	let navLinks;

	// 	if (this.props.location.pathname === "/login") {
	// 		navLinks = (
	// 			<div>
	// 				<Link to="/signup">Signup</Link>
	// 				<DemoButtonContainer />
	// 			</div>
	// 		);
	// 	} else if (this.props.location.pathname === "/signup") {
	// 		navLinks = (
	// 			<div>
	// 				<Link to="/login">Login</Link>
	// 				<DemoButtonContainer />
	// 			</div>
	// 		);
	// 	} else {
	// 		navLinks = (
	// 			<div>
	// 				<Link to="/signup">Signup</Link>
	// 				<Link to="/login">Login</Link>
	// 				<DemoButtonContainer />
	// 			</div>
	// 		);
	// 	}

	// 	if (this.props.loggedIn) {
	// 		return (
	// 			<div>
	// 				<Link to={"/profile"}>Profile</Link>
	// 				<button onClick={this.logoutUser}>Logout</button>
	// 			</div>
	// 		);
	// 	} else {
	// 		return navLinks;
	// 	}
	// }

	render() {
		return (
			<div className="navbar">
				
				<Link className="navbar-logo" to="/splash">
				<img src={Logo}></img>
				</Link>

				<Link to="">My Page</Link>
				
				<Link to="">Shows</Link>

				<SearchBarContainer />

				<div>current: {this.props.currentUser}</div>
				<button onClick={this.logoutUser}>Logout</button>
			</div>
		);
	}
}

export default withRouter(NavBar);
