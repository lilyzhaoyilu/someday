import React, { Component } from "react";

export default ({ user }) => {
	console.log("hello");
	let date = user.date.slice(0, 10).split("-");
	[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
	date = date.join("/");
	return (
		<li key={`user-item-${user._id}`}>
			<p className="new-user-item">{`${user.handle} joined Someday at ${date}`}</p>
		</li>
	);
};
