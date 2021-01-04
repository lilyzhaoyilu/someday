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
		this.props
			.deleteWatchlistItem(this.props.listId, this.props.movieId)
			.then(() => {
				this.props.getThisWatchList(this.props.listId);
			});
	}

	render() {
		const { movieId } = this.props;
		return (
			<div className="watchlist-item-detail movie-img">
				<Link to={`/mediaPage/${movieId}`}>
					<div>
						{this.state.title}

						<button onClick={this.handleRemoveItemFromList}>remove</button>
					</div>
					<div>
						<img src={this.state.imgUrl} height="150" width="auto" />
					</div>
				</Link>
			</div>
		);
	}
}

export default WatchlistItemDetail;
