import Logo from '../../util/somedaylogo.svg';
import SearchBarContainer from './search_bar/search_bar_container';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";

export default class ProfileNavbar extends Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId);
    this.props.showMyHistorylists(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.getMyWatchlists(this.props.userId);
      this.props.showMyHistorylists(this.props.userId);
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const watchLength = Object.values(this.props.watchlists).length;
    const historyLength = Object.values(this.props.historylists).length;
    const watchMsg = watchLength <= 1 ? "Watch List" : "Watch Lists"
    const historyMsg = historyLength <= 1 ? "History List" : "History Lists";
    return (
      <div className="navbar-wrapper">
        <div className="profile-navbar">
          <div className="left">
            <Link className="navbar-logo" to="/splash">
              <img src={Logo} />
            </Link>
            <SearchBarContainer />
          </div>
          <div className="nav-links">
            <Link to="/movie-index">Movies</Link>
            <Link to="/show-index">TV Shows</Link>
            <div className="user-dropdown">
              <span className="user-dropdown-header">Account</span>
              <div className="user-dropdown-content">
                <header>{this.props.currentUser}</header>
                <div className="all-list">
                  <div className="todoLists">
                    <div className="list">{watchLength}</div>
                    <span>{watchMsg}</span>
                  </div>
                  <div className="watchLists">
                    <div className="list">{historyLength}</div>
                    <span>{historyMsg}</span>
                  </div>
                </div>
                <div className="logout-button" onClick={this.logoutUser}>
                  <RiLogoutBoxRLine className="logout-icon" />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
