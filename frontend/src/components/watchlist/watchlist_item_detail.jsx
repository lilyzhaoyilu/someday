import React, { Component } from "react";
import { Link } from "react-router-dom";

class WatchlistItemDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			imgUrl: "",
		};
		this.handleRemoveItemFromList = this.handleRemoveItemFromList.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.fetchMovieData(this.props.movieId).then((result) => {
				if (result && result.show) {
					this.setState({
						title: result.show.data.title.title,
						imgUrl: result.show.data.title.image.url,
					});
				}
			});
		}, this.props.idx * 400);
	}

	handleRemoveItemFromList(e) {
		e.preventDefault();
		// debugger;

		const newList = {
			...this.props.watchlist,
			movie: this.props.watchlist.movie.filter(
				(movieId) => movieId !== this.props.movieId
			),
		};
		console.log(this.props.movieId);
		this.props.updateWatchlist(newList).then(() => {
			this.props.onUpdateList();
		});
	}

	render() {
		console.log(this.props);
		const { movieId } = this.props;
		return (
			<div className="watchlist-item-detail">
				<Link to={`/mediaPage/${movieId}`} className="tooltip movie-img">
					<span className="tooltiptext">
						{this.state.title}

						<button
							onClick={this.handleRemoveItemFromList}
							className="remove-from-list-btn"
						>
							remove
						</button>
					</span>
					<div>
						<img src={this.state.imgUrl} height="150" width="auto" />
					</div>
				</Link>
			</div>
		);
	}
}

export default WatchlistItemDetail;
