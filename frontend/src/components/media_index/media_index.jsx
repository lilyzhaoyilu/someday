import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

class MediaIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			hasMore: true,
			media: [],
		};
		this.fetchMoreData = this.fetchMoreData.bind(this);
	}
	componentDidMount() {
		this.props.action().then((res) => {
			var i = 0;
			this.setState({ media: this.props.media.slice(0, 4) });
			while (i < 3) {
				this.props
					.fetchMediaData(this.state.media[i].id)
					.then((res) => {
						this.setState({ media: this.props.media.slice(0, i) });
					})
					.then(i++);

				this.setState({ page: 3 });
			}
		});
	}

	fetchMoreData = () => {
		// console.log("fetching");
		if (this.state.media.length >= 100) {
			this.setState({ hasMore: false });
			return;
		}
		var i = this.state.page;
		while (i < this.state.page + 3) {
			this.props
				.fetchMediaData(this.props.media[i].id)
				.then((res) => {
					this.setState({ media: this.props.media.slice(0, i) });
				})
				.then(i++);
		}
		this.setState({ page: this.state.page + 3 });
		console.log("postFetch", this.state);
	};

	render() {
		return this.state.media.every((media) => media.hasOwnProperty("image")) ? (
			<div>
				<h1>hello</h1>
				<InfiniteScroll
					dataLength={this.state.media.length}
					next={this.fetchMoreData}
					hasMore={this.state.hasMore}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: "center" }}>
							<b>That's all folks!</b>
						</p>
					}
				>
					{this.state.media.map((media, i) => {
						{
						}
						return (
							<div>
								<h1>hi</h1>
								<h1>{media.title}</h1>
								<img
									src={media.image.url}
									style={{ width: "150px", height: "auto" }}
								/>
							</div>
						);
					})}
				</InfiniteScroll>
			</div>
		) : null;
	}
}

export default MediaIndex;
