import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../util/somedaylogo.svg";

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			handle: "",
			password: "",
			password2: "",
			about: "",
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			email: this.state.email,
			handle: this.state.handle,
			password: this.state.password,
			password2: this.state.password2,
			about: this.state.about,
		};

		this.props.signup(user);
		this.props.login(user);
		this.props.history.push("/");
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	//remove session errors before unmount
	componentWillUnmount() {
		this.props.eraseSessionErrors();
	}

	render() {
		const demoUser = {
			email: "demouser@demo.com",
			password: "hunter12"
		}
		return (
			<div className="signup-form-container">
				<div>
					<Link to="/">
						<img className="login-form-logo" src={Logo}></img>
					</Link>
				</div>

				<div>
					<Link className="sinup-form-signup" to="/login">
						Log in instead
					</Link>
				</div>

				<form onSubmit={this.handleSubmit} className="signup-form">
					<input
						type="text"
						value={this.state.email}
						onChange={this.update("email")}
						placeholder="Email*"
					/>

					<input
						type="text"
						value={this.state.handle}
						onChange={this.update("handle")}
						placeholder="Handle"
					/>

					<input
						type="password*"
						value={this.state.password}
						onChange={this.update("password")}
						placeholder="Password*"
					/>

					<input
						type="password*"
						value={this.state.password2}
						onChange={this.update("password2")}
						placeholder="Confirm Password*"
					/>

					<textarea
						value={this.state.about}
						onChange={this.update("about")}
						placeholder="Tell us about you"
					/>

					<input type="submit" value="Sign Up" />
					{this.renderErrors()}

					<button className="sinup-form-demo" onClick={() => this.props.login(demoUser)}>Login as demo user</button>

				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);
