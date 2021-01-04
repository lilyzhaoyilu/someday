import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imgUrl: ""
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchMovieData(this.props.movieId).then((result) => {

        if(result && result.show){
        this.setState({
          title: result.show.data.title.title,
          imgUrl: result.show.data.title.image.url
        })}
      })
    }, this.props.idx * 400)
  }



  render() {
    const { movieId } = this.props;
    return (
      <div>
        <h3>{this.state.title}</h3>
        <Link to={`/mediaPage/${movieId}`}>
          <img src={this.state.imgUrl} height='100' width='auto' />
        </Link>
      </div>
    );
  }
}

export default MovieImage;