import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

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
      while (i < 4) {
        if (this.state.media[i]) {
          this.props
            .fetchMediaData(this.state.media[i].id)
            .then((res) => {
              console.log("request", res);
              this.setState({ media: this.props.media.slice(0, i) });
            })
            .then(i++);
        }

        this.setState({ page: 4 });
      }
    });
  }

  fetchMoreData = () => {
    if (this.state.media.length === this.props.media.length) {
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
  };

  render() {
    return (
      <div className="medias-container">
        <InfiniteScroll
          dataLength={this.state.media.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4 style={{ height: "750px", position: "absolute"}}>Loading...</h4>}
          height={700}
          className="media-index"
          scrollThreshold={0.4}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all folks!</b>
            </p>
          }
        >
          {this.state.media.map((media, i) => {
            console.log("rendering");
            if (media.hasOwnProperty("image")) {
              return (
                <span key={media.key} className="media-item">
                  <Link to={`/mediaPage/${media.id}`} className="media-link">
                    <img
                      src={media.image.url}
                      alt={media.title}
                      style={{ width: "200px", height: "auto" }}
                    />
                  </Link>
                  <Link to={`/mediaPage/${media.id}`} className="media-link">
                    <h3>{media.title}</h3>
                  </Link>
                </span>
              );
            }
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default MediaIndex;

{
  /* 					{this.state.media.every((media) => media.hasOwnProperty("image"))
   */
}
