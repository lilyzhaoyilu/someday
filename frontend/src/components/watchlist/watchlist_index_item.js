import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';

export default class WatchlistIndexItem extends Component {
  render() {
    const { movie } = this.props.watchlist
    let moviesArr = Object.values(movie)
    return movie ? (
      <div>

        <p>{`watchlist: ${this.props.watchlist.name}`}</p>
        {moviesArr.map(movie =>
          <span key={`watch-item-${movie}`}>
            <MovieImage movieId={movie} />
          </span>
          // <p>{movie}</p>
          // <MovieIndexItem 
          // key={movie.apiId}
          // movie={movie}
          // imgUrl={movie.imgUrl}
          // name={movie.name}/>
        )
        }

      </div>
    ) : null;
  }
}
