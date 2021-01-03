import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';

class WatchlistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveMovieFromTheList = this.handleRemoveMovieFromTheList.bind(this);
  }



  handleRemoveMovieFromTheList(movieId){
    
  }



  render() {
    const { movie } = this.props.watchlist
    let moviesArr = Object.values(movie)
    return movie ? (
      <div>

        <p>{`watchlist: ${this.props.watchlist.name}`}</p>
        {moviesArr.map((movie, i) =>
          <span key={`${this.props.watchlist._id}-${movie}-${i}`}>
            <MovieImage movieId={movie} />
            {/* <button> remove movie from the list</button> */}
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

export default WatchlistIndexItem;