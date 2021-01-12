import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../util/somedaylogo.svg";
import DemoButtonContainer from "./demo_button/demo_button_container";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
		this.handleClose = this.handleClose.bind(this);
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

		this.props.signup(user).then((res) => {
			if (res.type === "RECEIVE_SESSION_ERRORS") {
				this.setState({ errors: this.props.errors });
			} else {
				this.props
					.login({ email: user.email, password: user.password })
					.then((res) => {
						if (this.props.loggedIn) {
							this.props.push("/show-index");
						} else {
							this.setState({ errors: this.props.errors });
						}
					});
			}
		});
	}

	handleClose() {
		this.props.history.goBack();
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
		console.log(this.props.history);
		return (
			<div className="signup-form-container">
				<AiOutlineCloseCircle
					className="close-icon"
					onClick={this.handleClose}
				/>
				<div>
					<Link to="/">
						<img className="login-form-logo" src={Logo}></img>
					</Link>
				</div>

				<div className="session-link">
					<h3>Have an account?</h3>
					<Link to="/login">Login</Link>
				</div>

				<form onSubmit={this.handleSubmit} className="signup-form">
					<input
						type="text"
						value={this.state.email}
						onChange={this.update("email")}
						placeholder="Email*"
					/>
					<div className="error-div">
						<p>{this.state.errors.email}</p>
					</div>
					<input
						type="text"
						value={this.state.handle}
						onChange={this.update("handle")}
						placeholder="Handle"
					/>
					<div className="error-div">
						<p>{this.state.errors.handle}</p>
					</div>
					<input
						type="password"
						value={this.state.password}
						onChange={this.update("password")}
						placeholder="Password*"
					/>
					<div className="error-div">
						<p>{this.state.errors.password}</p>
					</div>
					<input
						type="password"
						value={this.state.password2}
						onChange={this.update("password2")}
						placeholder="Confirm Password*"
					/>
					<div className="error-div">
						<p>{this.state.errors.password2}</p>
					</div>

					<textarea
						value={this.state.about}
						onChange={this.update("about")}
						placeholder="Tell us about yourself."
					/>

					<input type="submit" value="Sign Up" />
					{/* {this.renderErrors()} */}

					<DemoButtonContainer />
				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);
