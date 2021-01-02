import MyProfileContainer from './my_profile/my_profile_container';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class ProfilePageNavbar extends Component {
  // componentDidMount() {
  //   this.props.fetchThisUser(this.props.currentUserId)
  // }

  handleWatchClick(){
    this.setState({
      watchlist: true,
      profile: false,
      historylist: false
    })
  }

  handleHistoryClick(){
    this.setState({
      watchlist: false,
      profile: false,
      historylist: true
    })
  }

  render() {
    return (
      <div className="profile-links">
        <button className='profile-nav-btn' onClick={() => this.handleWatchClick()}>My Want-to Watch</button>
        <button className='profile-nav-btn' onClick={() => this.handleHistoryClick()}>Watched List</button>
      </div>
    )
  }
}