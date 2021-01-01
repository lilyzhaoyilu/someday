import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';

export default class HistorylistIndexItem extends Component {
  constructor(props) {
    super(props);
    console.log("history i i", this.props.historylists);
    // this.state = { historylist: this.props.historylists[Math.floor(Math.random() * this.props.historylists.length)] }
  }
  // componentDidMount() {
  //   this.state.historylist.forEach(
  //     setTimeout(id => this.props.fetchMovieData(), 500)
  //   )
  // }

  render() {
    const { watched } = this.props
    return watched ? (
      <div>
        <li>
          <p>{watched.movie.id}</p>
          {/* <MovieIndexItem 
          key={watched.apiId} 
          watched={watched}
          imgUrl={watched.imgUrl}
          name={watched.name}/> */}
        </li>
      </div>
    ) : null;
  }
}