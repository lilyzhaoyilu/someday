import React, { useState, useEffect } from "react";
import MostRecentCommentIndex from "./most_recent_comment_index_cotainer";
function MostRecentComment({ comments, getAllComments }) {
	useEffect(() => {
		getAllComments();
	}, []);

	return (
		<div id="rc-container">
			<span className="recent-comment-header">Most Recent Comments</span>
			<div className="recent-comments">
				<ul>
					{comments.slice(0, 6).map((comment, idx) => (
						<MostRecentCommentIndex
							key={comment._id}
							comment={comment}
							idx={idx}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MostRecentComment;
