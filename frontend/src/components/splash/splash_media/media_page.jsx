import React, { Component } from "react";
import Loading from "./loading";

import { HiOutlineUser, HiUserGroup } from "react-icons/hi";
import { FiTag } from "react-icons/fi";
import { FcPlanner, FcScatterPlot } from "react-icons/fc";
class MediaPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isOpen2: false,
			title: "",
			year: "",
			imgUrl: "",
			author: "",
			rating: null,
			ratingCount: null,
			releaseDate: "",
			tags: [],
			plotOutline: "",
		};
	}

	componentDidMount() {
		this.props.fetchMovieData(this.props.movieId).then((result) => {
			if (result.show) {
				this.setState({
					title: result.show.data.title.title,
					year: result.show.data.title.year,
					imgUrl: result.show.data.title.image.url,
					author: "loading..." || result.show.data.plotSummary.author,
					rating: result.show.data.ratings.rating,
					ratingCount: result.show.data.ratings.ratingCount,
					releaseDate: result.show.data.releaseDate,
					tags: result.show.data.genres,
					plotOutline: result.show.data.plotOutline.text,
				});
			}
		});
	}
	componentDidUpdate(prevProps) {
		if (this.props.movie_id !== prevProps.movie_id) {
			this.props.fetchMovieData(this.props.movie_id).then((result) => {
				if (result.show) {
					this.setState({
						title: result.show.data.title.title,
						year: result.show.data.title.year,
						imgUrl: result.show.data.title.image.url,
						author: result.show.data.plotSummary.author,
						rating: result.show.data.ratings.rating,
						ratingCount: result.show.data.ratings.ratingCount,
						releaseDate: result.show.data.releaseDate,
						tags: result.show.data.genres,
						plotOutline: result.show.data.plotOutline.text,
					});
				}
			});
		}
	}

	render() {
		const ratingCount = this.state.ratingCount
			? this.state.ratingCount.toLocaleString("en-US")
			: this.state.ratingCount;
		return this.state.imgUrl ? (
			<section className="wrapper">
				<div className="content">
					<h1>
						<span>{this.state.title}</span>
						<span>{`(${this.state.year})`}</span>
					</h1>
					<div className="sub-wrapper">
						<div className="details">
							<img src={this.state.imgUrl} />
							<div className="info">
								<span>
									<HiOutlineUser /> Author: {this.state.author}
								</span>
								<span>
									<FiTag /> Genres:{" "}
									{this.state.tags.map((tag, idx) => (
										<span className="tag-arr" key={idx}>
											{tag}
										</span>
									))}
								</span>
								<span>
									<FcPlanner /> Release Date: {this.state.releaseDate}
								</span>
							</div>
							<div className="ratings">
								<span>
									<FcScatterPlot /> Rating: {this.state.rating}
								</span>
								<span>
									<HiUserGroup /> {ratingCount} people rated
								</span>
							</div>
						</div>
					</div>
					<div className="plot">
						<h3>Plot Summary</h3>
						<span>{this.state.plotOutline}</span>
					</div>
				</div>
			</section>
		) : (
			<Loading />
		);
	}
}

export default MediaPage;
