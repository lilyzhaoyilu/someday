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

  handleProfileClick() {
    this.setState({
      watchlist: true,
      profile: true,
      historylist: true
    })
  }
  
  render() {
    const { user } = this.props;
    const { profile, watchlist, historylist } = this.state;
    return (
      <div className="content">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <span
              className="nav-link active"
              data-toggle="pill"
              onClick={() => this.handleProfileClick()}
            >
              My Profile Page
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link active"
              data-toggle="pill"
              onClick={() => this.handleWatchClick()}
            >
              My Watch Lists
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link active"
              data-toggle="pill"
              onClick={() => this.handleHistoryClick()}
            >
              My History Lists
            </span>
          </li>
        </ul>
        <div className="tab-content">
          {watchlist ? <WatchlistIndex userId={user._id} /> : null}
          {historylist ? <HistorylistIndex userId={user._id} /> : null}
          {profile ? <UserComment /> : null}
        </div>
      </div>
    );
  }
}
