import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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

        if (result && result.show) {
          this.setState({
            title: result.show.data.title.title,
            imgUrl: result.show.data.title.image.url
          })
        }
      })
    }, this.props.idx * 400)
  }



  render() {
    const { movieId } = this.props;
    return (this.state.imgUrl) ? (

      <Link to={`/mediaPage/${movieId}`} className='tooltip movie-img'>
        <span className='tooltiptext'>{this.state.title}</span>
        <div>

          <img src={this.state.imgUrl} height='150' width='auto' />
        </div>
      </Link>

    ) : null;
  }
}

export default MovieImage;

// .tooltip .tooltiptext