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
			<div className="new-user-index">
				{/* {console.log("users", this.state.users)} */}
				<h3>New User to Someday</h3>
				<ul>
					{this.state.users.map((user, i) => {
						return <UserItem user={user} key={user._id} idx={i} />;
					})}
				</ul>
			</div>
		) : null;
	}
}

export default NewUserIndex;
