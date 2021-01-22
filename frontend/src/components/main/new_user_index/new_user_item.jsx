import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";

export default ({ user, idx }) => {
	let date = moment(user.date).format("MMM D YYYY");

	return (
		<Link
			to={`/profile/${user._id}`}
			key={`new-user-item-${user._id}-${idx}`}
			className="new-user-item"
		>
			{/* {console.log(date)} */}
			<p>
				<span className="user-item-username">{user.handle}</span> joined Someday
				<br />
				at {date}
			</p>
		</Link>
	);
};
