import React, { Component } from 'react'
import WatchlistIndex from '../watchlist/watchlist_index_container';
import HistorylistIndex from '../historylist/historylist_index_container';
import UserComment from '../comments/user_comment/user_comment_container';

export default class ProfileLists extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: true, watchlist: true, historylist: true };
  }

  handleWatchClick() {
    this.setState({
      watchlist: true,
      profile: false,
      historylist: false
    })
  }

  handleHistoryClick() {
    this.setState({
      watchlist: false,
      profile: false,
      historylist: true
    })
  }

  render() {
    const { user } = this.props;
    const { profile, watchlist, historylist } = this.state;
    return (
      <div className="profile-info">
        <div className="profile-links">
          <button className='profile-nav-btn' onClick={() => this.handleWatchClick()}>My Want-to Watch</button>
          <button className='profile-nav-btn' onClick={() => this.handleHistoryClick()}>Watched List</button>
        </div>
        {/* {watchlist ? <WatchlistIndex userId={user._id} /> : null} */}
        {historylist ? <HistorylistIndex userId={user._id} /> : null}
        {/* {profile ? <UserComment /> : null} */}
      </div>
    )
  }
}
