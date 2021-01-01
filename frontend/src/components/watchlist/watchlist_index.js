import React, { Component } from 'react';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends Component {
  componentDidMount() {
    this.props.getAllWatchlists(this.props.userId)
  }

  render() {
    const { watchlists } = this.props;
    console.log(watchlists);
    return (
      <div>
        {/* <ul>
          {watchlists.map(watchlist => <WatchlistIndexItem
            watchlist={watchlist} key={watchlist.id} />)}
        </ul> */}
      </div>
    )
  }
}
