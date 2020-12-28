import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "./navbar.css";

class NavBar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	getLinks() {
		let navLinks;

		if (this.props.location.pathname === "/login") {
			navLinks = (
				<div>
					<Link to="/signup">Signup</Link>
				</div>
			);
		} else if (this.props.location.pathname === "/signup") {
			navLinks = (
				<div>
					<Link to="/login">Login</Link>
				</div>
			);
		} else {
			navLinks = (
				<div>
					<Link to="/signup">Signup</Link>
					<Link to="/login">Login</Link>
				</div>
			);
		}

		if (this.props.loggedIn) {
			return (
				<div>
					<Link to={"/profile"}>Profile</Link>
					<button onClick={this.logoutUser}>Logout</button>
				</div>
			);
		} else {
			return navLinks;
		}
	}

	render() {
		console.log(this.props.location.pathname);
		return (
			<div>
				<h1>Someday</h1>
				{this.getLinks()}
			</div>
		);
	}
}

export default withRouter(NavBar);
