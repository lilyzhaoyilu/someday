// import React, {useEffect,useState} from 'react';

// function MostRecentCommentIndex({ fetchMovieData, comment, idx, movieId }) {

//   const [imgUrl, setImgUrl] = useState("");
//   useEffect(() => {
//     fetchMovieData(movieId).then((res) =>setImgUrl(res.show.data.title.image.url))
//   }, []);

//   return (
//     <div>
//       <img src={imgUrl}></img>
//       <span>{comment.text}</span>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import moment from "moment";
import React, { Component } from "react";

class MostRecentCommentIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: "",
			id: this.props.movieId,
		};
	}
	componentDidMount() {
		setTimeout(() => {
			if (this.props.media.hasOwnProperty(`${this.props.movieId}`)) {
				if (!this.props.media[this.props.movieId].hasOwnProperty("image")) {
					this.props.fetchMovieData(this.props.movieId).then((res) => {
						this.setState({
							imgUrl: res.show.data.title.image.url,
							id: res.show.data.id.slice(7, res.show.data.id.length - 1),
						});
					});
				} else {
					this.setState({
						id: this.props.movieId,
						imgUrl: this.props.media[this.props.movieId].image.url,
					});
				}
			} else {
				this.props.fetchMovieData(this.props.movieId).then((res) => {
					this.setState({
						imgUrl: res.show.data.title.image.url,
						id: res.show.data.id.slice(7, res.show.data.id.length - 1),
					});
				});
			}
		}, this.props.idx * 1000 + 1000);
		this.props.fetchThisUser(this.props.comment.user).then((res) => {
			this.setState({ ...this.state, username: res.user.data.handle });
		});
	}
	render() {
		return (
			<div className="recet-item">
				<Link to={`/mediaPage/${this.state.id}`}>
					<img src={this.state.imgUrl}></img>
				</Link>

				<div className="recet-text-container">
					<Link to={`/profile/${this.props.comment.user}`}>
						<h3 className="r-t-username">{this.state.username}</h3>
					</Link>
					<p className="r-t-date">
						{moment(this.props.comment.date).format("MMM D YYYY")}
					</p>
					<span className="recet-text">{this.props.comment.text}</span>
				</div>
			</div>
		);
	}
}

export default MostRecentCommentIndex;

// export default MostRecentCommentIndex;
