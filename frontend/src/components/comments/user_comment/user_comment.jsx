import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentDetailForUser from "./comment_detail_for_user/comment_detail_for_user_container";
class UserComment extends Component {
	constructor(props) {
		super(props);
		this.displayUsername = this.displayUsername.bind(this);
		this.displayCommentNumber = this.displayCommentNumber.bind(this);
		this.state = { comments: [] };
	}

	componentDidMount() {
		this.props.getUserComments(this.props.currentPageUserId).then((res) => {
			this.setState({
				comments: [
					Object.values(this.props.comments)
						.filter((comment) => comment.user === this.props.currentPageUserId)
						.slice(0, 4),
				],
			});
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentPageUserId !== prevProps.currentPageUserId) {
			this.props.getUserComments(this.props.currentPageUserId);
		}
	}

	displayUsername() {
		if (this.props.currentPageUserId === this.props.currentUserId) {
			return <span>My comments</span>;
		} else {
			const userName = this.props.users[this.props.currentPageUserId].email;
			return <span>{userName}'s comments</span>;
		}
	}

	displayCommentNumber() {
		const commnetNumber = Object.values(this.props.comments).length;
		if (commnetNumber === 1) {
			return <span>1 comment</span>;
		} else if (commnetNumber === 1) {
			return <span>0 comment</span>;
		} else {
			return <span>{`${commnetNumber} comments`}</span>;
		}
	}

	render() {
		const commentsObjects = Object.values(this.props.comments);

		let commentMoviesSet = new Set();
		commentsObjects.forEach((comment) => commentMoviesSet.add(comment.movie));
		const commentMovies = [...commentMoviesSet];
		commentMovies.forEach((movieId) => this.props.fetchMovieData(movieId));

		return (
			<div className="comment-user">
				{this.displayUsername()} ···({this.displayCommentNumber()})
				{commentsObjects.map((comment) => (
					<CommentDetailForUser key={comment._id} comment={comment} />
				))}
			</div>
		);
	}
}

export default UserComment;
