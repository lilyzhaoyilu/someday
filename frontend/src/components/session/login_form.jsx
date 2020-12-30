import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from '../../util/somedaylogo.svg';



class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
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
	//remove session errors before unmount
	componentWillUnmount() {
		this.props.eraseSessionErrors();
	}
	// Render the session errors if there are any
	renderErrors() {
		return (
			<ul>
				{Object.keys(this.props.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.props.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		const errors = this.props;
		const demoUser = {
			email: "demouser@demo.com",
			password: "hunter12"
		}
		return (
		
			<div className="login-form-container">
				
				<div><Link to="/splash"><img className="login-form-logo" src={Logo}></img></Link></div>
				
				<div ><Link className="login-form-signup" to="/signup">Sign up instead</Link></div>
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
						<strong>{errors.password}</strong>
						<input type="submit" value="Submit" />
						
						<button className="sinup-form-demo" onClick={()=> this.props.login(demoUser)}>Login as demo user</button>
				</form>
				{this.renderErrors()}
			</div>
		);
	}
}

export default withRouter(LoginForm);
