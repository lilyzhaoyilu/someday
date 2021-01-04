import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';

export default class WatchlistIndexItem extends Component {
  render() {
    const { watchlist } = this.props
    return watchlist ? (

      <li>
        <p>{`watchlist: ${watchlist.name}`}</p>
        <ul>
          {
            watchlist.movie.map((movieId, i) => <span key={`${watchlist._id}-${movieId}-${i}`}><MovieImage movieId={movieId} idx={i} /></span>)
          }
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
