import React, { Component } from 'react';
// import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';

class WatchlistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveMovieFromTheList = this.handleRemoveMovieFromTheList.bind(this);
  }



  handleRemoveMovieFromTheList(movieId){
    
   let oldWatchListObject = this.props.watchlist;
   console.log("oldWatchlistObject", oldWatchListObject)
   let newWatchList = oldWatchListObject.movie.filter(movie => movie !== movieId)
   console.log("newWatchList",newWatchList);
   let newWatchListObject = Object.assign({},oldWatchListObject, {movie: newWatchList})
   console.log("newWatchListObject",newWatchListObject);
   this.props.updateWatchlist(newWatchListObject);
  }



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

export default WatchlistIndexItem;