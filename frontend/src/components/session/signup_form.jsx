import React from "react";
import { withRouter, Link } from "react-router-dom";

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

		this.props.signup(user, this.props.history);
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

	render() {
		return (
			<div className="signup-form-container">

				<div className="signup-form-title">
				this is the title and the logo
				</div>
				<div>
				<Link to="/login">Log in instead</Link>
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
								placeholder="Password"
							/>
					

				
							<input
								type="password*"
								value={this.state.password2}
								onChange={this.update("password2")}
								placeholder="Confirm Password"
							/>
					

					
							<textarea 
								value={this.state.about} 
								onChange={this.update('about')}
								placeholder="Tell us about you"
							/>
					
						<input type="submit" value="Sign Up" />
						{this.renderErrors()}
				
				</form>
				<button>Login as demo user</button>
			</div>
		);
	}
}

export default withRouter(SignupForm);
