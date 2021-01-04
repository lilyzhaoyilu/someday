import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';
import HistoryItemDetail from './historylist_item_detail_container'

export default class HistorylistIndexItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { historylist: this.props.historylists[Math.floor(Math.random() * this.props.historylists.length)] }

  // }
  // componentDidMount() {
  //   this.state.historylist.forEach(
  //     setTimeout(id => this.props.fetchMovieData(), 500)
  //   )
  // }

  render() {
    const { historylist } = this.props
    return historylist ? (

      <li>
        <p >{`historylist: ${historylist.name}`}</p>
        <ul>
          {historylist.movie.map((movie, i) => {
            return (<HistoryItemDetail movieId={movie} listId={historylist._id} key={`${historylist._id}-${movie}-${i}`} />)
          }
          )}

        </ul>

      </li>
    ) : null;
  }
}

