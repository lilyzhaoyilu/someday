import React, { Component } from 'react'
import PopularMoviesIndexItem from './popular_movies_index_item_container';

export default class PopularMoviesIndex extends Component {
  componentDidMount() {
    setTimeout(() => this.props.fetchPopularMovies(), 1000)

  }

  render() {
    const { movies } = this.props
    return (
      <div>
        <ul>
          {movies.map((movie, i) => {
            if (i < 4) {
              return (
                <PopularMoviesIndexItem
                  showId={movie.id}
                  key={movie.id}
                />
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
