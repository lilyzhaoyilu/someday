import React, { Component } from 'react'
import MovieIndexItem from './movie_index_item';

export default class MovieIndex extends Component {

  componentDidMount(){
    this.props.fetchAllMovies()
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <ul>
          {movies.map(movie => <MovieIndexItem 
          key={movie.id} movie={movie} url={movie.url} imgUrl={movie.imgUrl} name={movie.name}/>)}
        </ul>
      </div>
    )
  }
}
