import Logo from '../../util/somedaylogo.svg';
import SearchBarContainer from './search_bar/search_bar_container';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class ProfileNavbar extends Component {
  render() {
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
          </div>
        </div>
      </div>
    )
  }
}
