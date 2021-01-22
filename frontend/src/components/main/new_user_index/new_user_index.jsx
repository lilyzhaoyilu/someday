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
			<div >
				<h3 id="new-user-title">New User</h3>
				<div className="new-user-index">
					{/* {console.log("users", this.state.users)} */}
					<ul>
						{this.state.users.map((user, i) => {
							return <UserItem user={user} key={user._id} idx={i} />;
						})}
					</ul>
				</div>
			</div>
		) : null;
	}
}

export default NewUserIndex;
