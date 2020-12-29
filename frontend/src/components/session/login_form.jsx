import React from "react";
import { withRouter, Link } from "react-router-dom";
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
	}

	// Handle field updates (called in the render method)
	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	// Handle form submission
	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.login(user);
		this.props.history.push("/");
	}

	// Render the session errors if there are any
	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
		
			<div className="login-form-container">
				<div className="login-form-title">
				<Link to="/">this is the title and the logo</Link>
				</div>
				<Link to="/signup">Sign up instead</Link>
				<form className="login-form" onSubmit={this.handleSubmit}>

						<input
							type="text"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email"
						/>
					
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
						/>
					
						<input type="submit" value="Submit" />
						{this.renderErrors()}
				
				</form>
			</div>
		);
	}
}

export default withRouter(LoginForm);
