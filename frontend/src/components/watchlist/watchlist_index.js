import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends Component {
  componentDidMount() {
    this.props.getMyWatchlist(this.props.userId)
  }

  render() {
    const { watchlists } = this.props;
    return watchlists ? (
      <div>
        <p>watchlists</p>
        <ul>
          {watchlists.map(watchlist => <WatchlistIndexItem
            watchlist={watchlist} key={watchlist.id} />)}
        </ul>
      </div>
    ) : null;
  }
}
