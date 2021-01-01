import React, { Component } from 'react';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends Component {
  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId)
  }

  render() {
    const { watchlists } = this.props;
    return (
      <div>
        <h1>Watchlists:</h1>
        <ul>
          {watchlists
            .filter(list => list.user === this.props.userId)
            .map(watchlist => <WatchlistIndexItem
              watchlist={watchlist}
              key={watchlist._id} />)}
        </ul>
      </div>
    )
  }
}
