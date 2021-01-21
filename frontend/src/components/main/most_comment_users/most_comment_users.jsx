import UserItem from "./mc_user_item";
import React, { Component } from "react";

class NewUserIndex extends Component {
	constructor(props) {
		super(props);
		this.state = { users: {} };
	}

	componentDidMount() {
		this.props.getAllComments().then((res) => {
			this.setState({ comments: res.comments.data });
			this.state.comments.forEach((comment) => {
				if (this.state.users.hasOwnProperty(`${comment.user}`)) {
					this.setState({
						...this.state,
						users: {
							...this.state.users,
							[comment.user]: this.state.users[comment.user] + 1,
						},
					});
				} else {
					this.setState({
						...this.state,
						users: { ...this.state.users, [comment.user]: 1 },
					});
				}
			});
			console.log(this.state);
		});
	}
	render() {
		return (
			<div>
				{/* {console.log("comments", this.state.comments)} */}
				{/* <ul>
					{this.state.users.map((user) => {
						return <UserItem user={user} />;
					})}
				</ul> */}
				<h1>hi</h1>
			</div>
		);
	}
}

export default NewUserIndex;
