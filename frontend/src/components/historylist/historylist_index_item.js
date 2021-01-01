import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';

export default class HistorylistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = { historylist: this.props.historylists[Math.floor(Math.random() * this.props.historylists.length)] }

  }
  // componentDidMount() {
  //   this.state.historylist.forEach(
  //     setTimeout(id => this.props.fetchMovieData(), 500)
  //   )
  // }

  render() {
    const { watched } = this.props
    //TODO will add movie info soon!
    return watched ? (

      <li>
        <p>{`historylist: ${watched.name}`}</p>
        <ul>
          {watched.movie.map(movieId => <li key={`historyIndexMovie-${movieId}`}>{movieId}</li>)}
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