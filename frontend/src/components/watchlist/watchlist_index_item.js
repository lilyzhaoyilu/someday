import React, { Component } from 'react';
// import MovieIndexItem from '../movie/movie_index_item';
// import MovieImage from '../movie_image/img_container';
import WatchlistItemDetail from './watchlist_item_detail_container'
class WatchlistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onUpdateList = this.onUpdateList.bind(this)
  }
  componentDidMount() {
    this.props.getThisWatchList(this.props.listId)
      .then(
        res => {
          this.setState({ watchlist: this.props.watchlist })
        }
      )
  }

  onUpdateList() {
    // console.log(this.props.watchlists[this.props.watchlist._id])
    this.setState({ watchlist: this.props.watchlists[this.props.watchlist._id] })
    // console.log("post", this.state)
  }


  render() {
    const { watchlist } = this.state
    return watchlist ? (
      <li className='list-container'>
        <p>{watchlist.name}</p>
        <span className="list-display">
          {watchlist.movie.map(movie => (
            <WatchlistItemDetail
              movieId={movie}
              listId={watchlist._id}
              watchlist={watchlist}
              onUpdateList={this.onUpdateList}
            />
          ))}
        </span>
      </li>

    ) : null;

  }
}
// const { watchlist } = this.state
// return watchlist ? (
//   <li className="list-container">
//     <p>{watchlist.name}</p>
//     <span className="list-display">
//       {watchlist.movie.map(movie => {
//         return (
//           <WatchlistItemDetail
//             movieId={movie}
//             listId={watchlist._id}
//             watchlist={watchlist}
//             onUpdateList={this.onUpdateList}
//           />
//         )
//       })}
//     </span>
//   </li>
// ) : null;



export default WatchlistIndexItem;