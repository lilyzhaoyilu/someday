import React, { Component } from "react";

class NewUserIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props
			.fetchAllUsers()
			.then((res) => this.setState({ users: res.users }));
	}
	render() {
		return (
			<div>
				{console.log("users", this.state)}
				<h1>hi</h1>
			</div>
		);
	}
}

export default NewUserIndex;
