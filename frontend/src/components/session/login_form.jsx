import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../util/somedaylogo.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import DemoButtonContainer from './demo_button/demo_button_container';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	// Handle field updates (called in the render method)
	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}
	handleClose() {
		this.props.history.goBack();
	}
	// Handle form submission
	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.login(user).then((res) => {
			if (this.props.loggedIn) {
				this.props.history.push("/show-index");
			} else {
				this.setState({ errors: this.props.errors });
				// console.log(this.state.errors);
			}
		});
		// .then((res) => this.props.history.push("/show-index"));
	}

	handleDemoLogin(e) {
		e.preventDefault();
		this.props.demoLogin().then(() => this.props.history.push("/"));
	}
	//remove session errors before unmount
	componentWillUnmount() {
		this.props.eraseSessionErrors();
	}
	// Render the session errors if there are any
	renderErrors() {
		return (
			<ul
				style={{
					height: "50px",
					color: "red",
					textAlign: "center",
					lineHeight: "1.5em",
				}}
			>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<AiOutlineCloseCircle
					className="close-icon"
					onClick={this.handleClose}
				/>
				<div>
					<Link to="/splash">
						<img className="login-form-logo" src={Logo}></img>
					</Link>
				</div>

				<div className="session-link">
					<h3>Don't have an account?</h3>
					<Link to="/signup">Sign Up</Link>
				</div>
				<form className="login-form" onSubmit={this.handleSubmit}>
					<span className="input-container">
						<input
							type="text"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email"
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
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
							id="password"
							className="gate"
						/>
						<label for="password">Password</label>
					</span>

					{/* {this.renderErrors()} */}
					<div className="error-div">
						<p>{this.state.errors.password}</p>
					</div>
					<button className="sinup-form-demo">Login</button>

					{/* <button className="sinup-form-demo">Login as demo user</button> */}
					{/* <DemoButtonContainer /> */}
					<button className="sinup-form-demo" onClick={this.handleDemoLogin}>
						Demo Login
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginForm);
