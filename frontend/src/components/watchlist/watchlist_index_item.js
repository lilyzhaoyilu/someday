import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';

export default class WatchlistIndexItem extends Component {
  render() {
    const { movies } = this.props.watchlist
    let moviesArr = Object.values(movies)
    return movies ? (
      <div>
        <li>
          {moviesArr.map(movie => <MovieIndexItem 
          key={movie.apiId}
          movie={movie}
          imgUrl={movie.imgUrl}
          name={movie.name}/>)}
        </li>
      </div>
    ) : null;
  }
}
