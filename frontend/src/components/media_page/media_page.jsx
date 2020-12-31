import React, { Component } from "react";

class MediaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      imgUrl: "",
      rating: "",
      releaseDate: "",
      tags: [],
      plotOutline: "",
    };
  }
  componentDidMount() {
    this.props.fetchShowData(this.props.movie_id).then((result) => {
      this.setState({
        title: result.title.title,
        year: result.title.year,
        imgUrl: result.title.image.url,
        rating: result.ratings.rating,
        releaseDate: result.releaseDate,
        tags: result.genres,
        plotOutline: result.plotOutline.text,
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.movie_id !== prevProps.movie_id) {
      this.props.fetchShowData(this.props.movie_id).then((result) => {
        this.setState({
          title: result.title.title,
          imgUrl: result.title.image.url,
          rating: result.ratings.rating,
          releaseDate: result.releaseDate,
          tags: result.genres,
          plotOutline: result.plotOutline.text,
        });
      });
    }
  }

  render() {
    return (
      <section>
        <div>
          <img src={this.state.imgUrl} />
          <h3>{this.state.title}</h3>
          <div>
            <span>{this.state.rating}</span>
            <span>{this.state.tags}</span>
          </div>
          <div>
            <span>{this.state.releaseDate}</span>
            <span>{this.state.plotOutline}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default MediaPage;
