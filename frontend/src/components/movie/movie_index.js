import React, { Component } from 'react'
import MovieIndexItem from './movie_index_item';

export default class MovieIndex extends Component {
render() {
  const { movies } = this.props;
    return movies ? (
      <div>
        <ul>
          {movies.map(movie => {
            if (movie.id.slice(0, 2) === 'tt') {
              return (
                <MovieIndexItem
                  key={movie.id}
                  movie={movie}
                  imgUrl={movie.i.imageUrl}
                  name={movie.l}
                  year={movie.y}
                />
              )
            }
          })}
        </ul>
      </div>
    ): null;
  }
}
