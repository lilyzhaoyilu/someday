import React, { Component } from 'react';
import PopularShowsIndexItem from './popular_shows_index_item_container';

export default class PopularShowsIndex extends Component {
  componentDidMount() {
    // this.props.fetchPopularTv()
    setTimeout(() => this.props.fetchPopularTv(), 4000)

  }

  render() {
    const { shows } = this.props
    return (
      <div>
        <ul>
          {shows.map((show, i) => {
            if (i < 8) {
              return (
                <PopularShowsIndexItem
                  showId={show.id}
                  key={show.id}
                  index={i}
                />
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
