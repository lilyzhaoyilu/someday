import React, { Component } from 'react';
import PopularShowsIndexItem from './popular_shows_index_item';

export default class PopularShowsIndex extends Component {
  componentDidMount() {
    this.props.fetchPopularTv()
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
                  show={show}
                  key={show.id}

                />
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
