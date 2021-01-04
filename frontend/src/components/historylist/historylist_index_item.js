import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';
import MovieImage from '../movie_image/img_container';
import HistoryItemDetail from './historylist_item_detail_container'

export default class HistorylistIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = { historylist: this.props.historylist }
    this.onUpdateList = this.onUpdateList.bind(this);
  }
  // componentDidMount() {
  //   this.state.historylist.forEach(
  //     setTimeout(id => this.props.fetchMovieData(), 500)
  //   )
  // }

  onUpdateList() {
    this.setState({ historylist: this.props.historylists[this.props.historylist._id] })
  }
  render() {
    const { historylist } = this.state


    return historylist ? (
      <li className="list-container">
        <p >{historylist.name}</p>
        <span className="list-display">

          {historylist.movie.map((movie, i) => {
            return (
              <HistoryItemDetail
                movieId={movie}
                listId={historylist._id}
                key={`${historylist._id}-${movie}-${i}`}
                onUpdateList={this.onUpdateList}
              />)
          })}
        </span>

      </li>
    ) : null;
  }
}

