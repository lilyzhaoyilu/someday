import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserSearchIndexItem extends Component {
  render() {
    const { user } = this.props;
    const randomId = Math.floor(Math.random() * 13)
    return (
      <div>
        <li>
          <img src={`https://robohash.org/${randomId}?set=set2`} className="user-search-pic"/>
          <Link to={`/profile/${user._id}`}>
            {user.handle}
          </Link>
        </li>
      </div>
    )
  }
}