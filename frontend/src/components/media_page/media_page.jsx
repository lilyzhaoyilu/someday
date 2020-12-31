import React, { Component } from "react";

class MediaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.movie_id !== prevProps.movie_id) {
      this.props.fetchMovieData(this.props.movie_id).then((result) => {
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
      });
    }
  }

  render() {
    
    return (
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
                <span>Author: {this.state.author}</span>
                <span>
                  Genres:{" "}
                  {this.state.tags.map((tag, idx) => (
                    <span className="tag-arr" key={idx}>
                      {tag}
                    </span>
                  ))}
                </span>
                <span>Release Date: {this.state.releaseDate}</span>
              </div>
              <div className="ratings">
                <span>Rating: {this.state.rating}</span>
                <span>Rating Count{this.state.ratingCount}</span>
              </div>
            </div>
          </div>
          <div className="plot">
            <h3>Plot Summary</h3>
            <span>{this.state.plotOutline}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default MediaPage;
