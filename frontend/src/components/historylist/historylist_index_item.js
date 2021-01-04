import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';

export default class HistorylistIndexItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { historylist: this.props.historylists[Math.floor(Math.random() * this.props.historylists.length)] }

  // }
  // componentDidMount() {
  //   this.state.historylist.forEach(
  //     setTimeout(id => this.props.fetchMovieData(), 500)
  //   )
  // }

  render() {
    const { watched } = this.props
    return watched ? (

      <li>
        <p >{`historylist: ${watched.name}`}</p>
        <ul>
          {watched.movie.map((movieId, i) => <span key={`${watched._id}-${movieId}-${i}`}><MovieImage movieId={movieId} idx={i} /></span>)}
          {/* <MovieIndexItem 
          key={watched.apiId} 
          watched={watched}
          imgUrl={watched.imgUrl}
          name={watched.name}/> */}
        </ul>

      </li>
    ) : null;
  }
}

