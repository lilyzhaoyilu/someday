import React, { Component } from 'react';
import MovieIndexItem from '../movie/movie_index_item';

export default class HistorylistIndexItem extends Component {
  render() {
    const { watched } = this.props
    return watched ? (
      <div>
        <li>
          <MovieIndexItem 
          key={watched.apiId} 
          watched={watched}
          imgUrl={watched.imgUrl}
          name={watched.name}/>
        </li>
      </div>
    ) : null;
  }
}