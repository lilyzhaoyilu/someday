import MyProfileContainer from './my_profile/my_profile_container';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class ProfilePageNavbar extends Component {
  render() {
    return (
      <div className="profile-links">
        <Link className='profile-nav-btn' to=''>Watch List</Link>
        <Link className='profile-nav-btn' to=''>Watched List</Link>
      </div>
    )
  }
}
