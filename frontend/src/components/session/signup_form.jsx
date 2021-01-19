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
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
							this.props.history.push("/show-index");
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
	handleDemoLogin(e) {
		e.preventDefault();
		this.props.demoLogin().then(() => this.props.history.push("/show-index"));
	}
	render() {
		// console.log(this.props.history);
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
					<span className="input-container">
						<input
							type="text"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email*"
							id="email"
							className="gate"
						/>
						<label for="email">Email</label>
					</span>

					<div className="error-div">
						<p>{this.state.errors.email}</p>
					</div>

					<span className="input-container">
						<input
							type="text"
							value={this.state.handle}
							onChange={this.update("handle")}
							placeholder="Handle"
							id="handle"
							className="gate"
						/>
						<label for="handle">Handle</label>
					</span>
					<div className="error-div">
						<p>{this.state.errors.handle}</p>
					</div>

					<span className="input-container">
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password*"
							id="password"
							className="gate"
						/>
						<label for="password">Password</label>
					</span>

					<div className="error-div">
						<p>{this.state.errors.password}</p>
					</div>

					<span className="input-container">
						<input
							type="password"
							value={this.state.password2}
							onChange={this.update("password2")}
							placeholder="Confirm Password*"
							id="password2"
							className="gate"
						/>
						<label for="password2">Password2</label>
					</span>

					<div className="error-div">
						<p>{this.state.errors.password2}</p>
					</div>

					<textarea
						value={this.state.about}
						onChange={this.update("about")}
						placeholder="Tell us about yourself."
					/>

					{/* {this.renderErrors()} */}
					<button className="sinup-form-demo">Sign Up</button>

					<button className="sinup-form-demo" onClick={this.handleDemoLogin}>
						Demo Login
					</button>
				</form>
			</div>
		);
	}
}
export default withRouter(SignupForm);
