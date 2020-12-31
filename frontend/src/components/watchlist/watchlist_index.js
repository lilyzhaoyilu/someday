import React, { Component } from 'react';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends Component {
  componentDidMount(){
    this.props.getMyWatchlist(this.props.match.params.userId)
  }

  render() {
    const { watchlists } = this.props;
    return (
      <div>
        <ul>
          {watchlists.map(watchlist => <WatchlistIndexItem 
          watchlist={watchlist} key={watchlist.id}/>)}
        </ul>
      </div>
    )
  }
}
