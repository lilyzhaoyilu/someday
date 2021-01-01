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
					<input type="submit" value={`Create ${this.props.formType}`} />
				</form>
			</div>
		);
	}
}

export default withRouter(ListFrom);
