import UserItem from "./mc_user_item";
import React, { Component } from "react";

class NewUserIndex extends Component {
	constructor(props) {
		super(props);
		this.state = { users: {}, userHolder: {} };
	}

	componentDidMount() {
		this.props.getAllComments().then((res) => {
			// console.log(res);
			this.setState({ comments: res.comments.data });
			this.state.comments.forEach((comment) => {
				if (this.state.users.hasOwnProperty(`${comment.user}`)) {
					this.setState({
						...this.state,
						users: {
							...this.state.users,
							[comment.user]: this.state.users[comment.user] + 1,
						},
						userHolder: {
							...this.state.userHolder,
							[comment.user]: this.state.userHolder[comment.user] + 1,
						},
					});
				} else {
					this.setState({
						...this.state,
						users: { ...this.state.users, [comment.user]: 1 },
						userHolder: { ...this.state.userHolder, [comment.user]: 1 },
					});
				}
			});
			const countArr = Object.values(this.state.users).sort((a, b) => b - a);
			const topCommenter = [];

			for (let i = 0; i < countArr.length; i++) {
				const currIdx = Object.values(this.state.users).indexOf(countArr[i]);
				const currUser = Object.keys(this.state.users)[currIdx];
				topCommenter.push(currUser);
				const currUsers = this.state.users;
				delete currUsers[currUser];
				this.setState({
					...this.state,
					users: currUsers,
					topCommenter: topCommenter,
				});
			}
			this.setState({ ...this.state, users: this.state.userHolder });
		});
	}
	render() {
		return this.state.hasOwnProperty("topCommenter") ? (
			<div id="mc-user-container">
				<h3 id="mc-users-title">Users with most Comments</h3>
				<div className="most-comment-users">
					<ul>
						{this.state.topCommenter.map((userId) => {
							return (
								<UserItem
									user={this.props.users[userId]}
									commentCount={this.state.users[userId]}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		) : null;
	}
}

export default NewUserIndex;
