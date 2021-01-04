import React, { Component } from 'react';
// import MovieIndexItem from '../movie/movie_index_item';
// import MovieImage from '../movie_image/img_container';
import WatchlistItemDetail from './watchlist_item_detail_container'
class WatchlistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.getThisWatchList(this.props.listId)
      .then(
        res => {
          this.setState({ watchlist: this.props.watchlist })
        }
      )
  }


  render() {

    const { watchlist } = this.state
    console.log("wii", watchlist)
    return watchlist ? (
      <li className="list-container">
        <p>{watchlist.name}</p>
        <span className="list-display">
          {watchlist.movie.map((movie) => {
            return (
              <WatchlistItemDetail movieId={movie} listId={watchlist._id} />
            );
          })}
        </span>
      </li>
    ) : null;
  }
}

export default WatchlistIndexItem;