import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default ({ user, idx }) => {
	let date = user.date.slice(0, 10).split("-");
	[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
	date = date.join("/");
	return (
		<Link
			to={`/profile/${user._id}`}
			key={`new-user-item-${user._id}-${idx}`}
			className="new-user-item"
		>
			<p>
				<span className="user-item-username">{user.handle}</span> joined Someday
				at ${date}
			</p>
		</Link>
	);
};
