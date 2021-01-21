import UserItem from "./new_user_item";
import React, { Component } from "react";

class NewUserIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props
			.fetchAllUsers()
			.then((res) => this.setState({ users: res.users.data }));
	}
	render() {
		return this.state.hasOwnProperty("users") ? (
			<div>
				{/* {console.log("users", this.state.users)} */}
				<ul>
					{this.state.users.map((user) => {
						return <UserItem user={user} key={user._id} />;
					})}
				</ul>
			</div>
		) : null;
	}
}

export default NewUserIndex;
