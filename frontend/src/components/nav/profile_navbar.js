import Logo from '../../util/somedaylogo.svg';
import SearchBarContainer from './search_bar/search_bar_container';
import MyProfileContainer from './my_profile/my_profile_container';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class ProfileNavbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="profile-navbar">
          <div className="left">
            <Link className="navbar-logo" to="/splash">
              <img src={Logo}/>
            </Link>
            <MyProfileContainer/>
            <Link to="">Movies</Link>
            <Link to="">TV Shows</Link>
          </div>
          <div>
            <SearchBarContainer/>
          </div>
        </div>
      </div>
    )
  }
}