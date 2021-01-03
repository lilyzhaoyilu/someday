import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class ListFrom extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.list;

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update() {
		return (e) => this.setState({ name: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		this.props.action(this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.name}
						onChange={this.update()}
						placeholder={`${this.props.formType} Name`}
					/>
					{/* disable the button if input.length < 1 */}
					<button type="submit" value={`Create ${this.props.formType}`} disabled={this.state.name.length < 1 } /> 
				</form>
			</div>
		);
	}
}

export default withRouter(ListFrom);
