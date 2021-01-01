import React, { Component } from 'react'
import MovieIndexItem from './movie_index_item';
// import MediaComment from '../comments/media_comment/media_comment_container'



export default class MovieIndex extends Component {

  render() {
    const { movies } = this.props;
    if (movies) {
      return (
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
      )

    } else {
      return null;
    }
  }
}
