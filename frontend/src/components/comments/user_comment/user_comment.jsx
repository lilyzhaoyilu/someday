import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentDetailForUser from "./comment_detail_for_user/comment_detail_for_user_container";
class UserComment extends Component {
	constructor(props) {
		super(props);
		this.state = { comments: [], hasMore: true };

		this.fetchMoreData = this.fetchMoreData.bind(this);
		this.displayUsername = this.displayUsername.bind(this);
		this.displayCommentNumber = this.displayCommentNumber.bind(this);
	}

	componentDidMount() {
		this.props.getUserComments(this.props.currentPageUserId).then((res) => {
			this.setState({
				comments: Object.values(this.props.comments)
					.filter((comment) => comment.user === this.props.currentPageUserId)
					.slice(0, 2),
			});

			if (this.state.comments.length === 0) {
				return;
			} else if (this.state.comments.length === 1) {
				this.props.fetchMovieData(Object.values(this.state.comments)[0].movie);
			} else {
				this.props.fetchMovieData(Object.values(this.state.comments)[0].movie);
				this.props.fetchMovieData(Object.values(this.state.comments)[1].movie);
			}
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentPageUserId !== prevProps.currentPageUserId) {
			this.props.getUserComments(this.props.currentPageUserId);
		}

		// if(Object.values(prevProps.comments).length != Object.keys(this.props.comments).length){
		// 	this.props.getUserComments(this.props.currentPageUserId)

		// .then((res) => {
		// 	this.setState({
		// 		comments: Object.values(this.props.comments)
		// 			.filter((comment) => comment.user === this.props.currentPageUserId)
		// 			.slice(0, 2),
		// 	});

		// 	if (this.state.comments.length === 0) {
		// 		return;
		// 	} else if (this.state.comments.length === 1) {
		// 		this.props.fetchMovieData(Object.values(this.state.comments)[0].movie);
		// 	} else {
		// 		this.props.fetchMovieData(Object.values(this.state.comments)[0].movie);
		// 		this.props.fetchMovieData(Object.values(this.state.comments)[1].movie);
		// }
		// }
	}

	fetchMoreData() {
		if (
			this.state.comments.length === Object.values(this.props.comments).length
		) {
			this.setState({ hasMore: false });
			return;
		}

		this.setState({
			comments: this.state.comments.concat(
				Object.values(this.props.comments).filter(
					(comment) => comment.user === this.props.currentPageUserId
				)[this.state.comments.length]
			),
		});
		console.log(Object.values(this.props.comments)[this.state.comments.length]);
		this.props.fetchMovieData(
			Object.values(this.props.comments)[this.state.comments.length - 1].movie
		);
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
		// const commentsObjects = Object.values(this.props.comments);

		// let commentMoviesSet = new Set();
		// commentsObjects.forEach((comment) => commentMoviesSet.add(comment.movie));
		// const commentMovies = [...commentMoviesSet];
		// commentMovies.forEach((movieId) => this.props.fetchMovieData(movieId));

		return (
			<div className="comment-user">
				<h2>
					{this.displayUsername()}{" "}
					<span className="user-cmnt-header">
						···({this.displayCommentNumber()})
					</span>
				</h2>
				<InfiniteScroll
					dataLength={this.state.comments.length}
					next={this.fetchMoreData}
					hasMore={this.state.hasMore}
					loader={<h4 style={{ height: "600px" }}>Keep scrolling...</h4>}
					height={500}
					scrollThreshold={0.6}
					endMessage={
						<p style={{ textAlign: "center", color: "gray" }}>
							No more comments from this user
						</p>
					}
				>
					<ul>
						{this.state.comments.map((comment) => (
							<CommentDetailForUser
								key={comment._id}
								comment={comment}
								userId={this.props.currentPageUserId}
							/>
						))}
					</ul>
				</InfiniteScroll>
			</div>
		);
	}
}

export default UserComment;
