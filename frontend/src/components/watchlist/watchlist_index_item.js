import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';

export default class WatchlistIndexItem extends Component {
  render() {
    const { movie } = this.props.watchlist
    let moviesArr = Object.values(movie)
    console.log("wii", moviesArr);
    return movie ? (
      <li>
        <p>{`watchlist: ${this.props.watchlist.name}`}</p>
        {moviesArr.map(movie =>
          <p>{movie}</p>
          // <p>{movie}</p>
          // <MovieIndexItem 
          // key={movie.apiId}
          // movie={movie}
          // imgUrl={movie.imgUrl}
          // name={movie.name}/>
        )
        }
      </li>
    ) : null;
  }
}
