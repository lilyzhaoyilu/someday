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
		this.handleReload = this.handleReload.bind(this);
	}

	componentDidMount() {
		if (this.props.media.hasOwnProperty(this.props.movieId)) {
			if (!this.props.media[this.props.movieId].hasOwnProperty("image")) {
				setTimeout(() => {
					this.props.fetchMovieData(this.props.movieId).then((result) => {
						if (result && result.show) {
							this.setState({
								title: result.show.data.title.title,
								imgUrl: result.show.data.title.image.url,
							});
						}
					});
				}, this.props.idx * 600);
			} else {
				this.setState({
					title: this.props.media[this.props.movieId].title,
					imgUrl: this.props.media[this.props.movieId].imgUrl,
				});
			}
		} else {
			setTimeout(() => {
				this.props.fetchMovieData(this.props.movieId).then((result) => {
					if (result && result.show) {
						this.setState({
							title: result.show.data.title.title,
							imgUrl: result.show.data.title.image.url,
						});
					}
				});
			}, this.props.idx * 600);
		}
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
		// console.log(this.props.movieId);
		this.props.updateWatchlist(newList).then(() => {
			this.props.onUpdateList();
		});
	}
	handleReload() {
		this.props.fetchMovieData(this.props.movieId).then((result) => {
			if (result && result.show) {
				this.setState({
					title: result.show.data.title.title,
					imgUrl: result.show.data.title.image.url,
				});
			}
		});
	}

	render() {
		// console.log(this.props);
		const { movieId } = this.props;
		return this.state.imgUrl ? (
			<div className="list-item-detail">
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
						<img src={this.state.imgUrl} height="300" width="auto" />
					</div>
				</Link>
			</div>
		) : (
			<div className="missing-pic">
				<div className="tooltip movie-img">
					<span className="tooltiptext">
						{/* {this.state.title} */}

						<button onClick={this.handleReload} className="reload-btn">
							Reload
						</button>
					</span>
					<div></div>
				</div>
			</div>
		);
	}
}

export default WatchlistItemDetail;
