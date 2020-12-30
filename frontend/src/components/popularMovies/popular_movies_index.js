import React, { Component } from 'react'
import PopularMoviesIndexItem from './popular_movies_index_item';

export default class PopularMoviesIndex extends Component {
  componentDidMount(){
    this.props.fetchPopularMovies()
  }

  render() {
    const { movies } = this.props
    return (
      <div>
        <ul>
          {movies.map((movie, i) => {
            if(i < 8){
              return(
                <PopularMoviesIndexItem 
                movie={movie} key={movie.id} imgUrl={movie.i.imageUrl} name={movie.l} year={movie.y} />
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
