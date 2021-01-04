import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from '../../util/somedaylogo.svg';
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
		this.props.login(user).then(() =>this.props.history.push("/show-index"));
	}

	handleDemoLogin(e){
		e.preventDefault();
		this.props.demoLogin().then(() =>this.props.history.push("/show-index"));
	}
	//remove session errors before unmount
	componentWillUnmount() {
		this.props.eraseSessionErrors();
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
        <div>
          <Link to="/splash">
            <img className="login-form-logo" src={Logo}></img>
          </Link>
        </div>

        <div className="session-link">
          <h3>Don't have an account?</h3>
          <Link to="/signup">
            Sign Up
          </Link>
        </div>
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

          {/* <button className="sinup-form-demo">Login as demo user</button> */}
          {/* <DemoButtonContainer /> */}
					<button className="sinup-form-demo" onClick={this.handleDemoLogin}>Demo Login</button>
        </form>
        {this.renderErrors()}
      </div>
    );
	}
}

export default withRouter(LoginForm);
