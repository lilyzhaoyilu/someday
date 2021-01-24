import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserSearchIndexItem extends Component {
  render() {
    const { user } = this.props;
    const randomId = Math.floor(Math.random() * 13)
    return (
      <div>
        <li className="indiv-user">
          <Link to={`/profile/${user._id}`}>
            <img 
                src={`https://robohash.org/${randomId}?set=set2`} 
                className="user-search-pic"
                width="100px"
                height="100px"
            />
          </Link>
          <Link to={`/profile/${user._id}`} className="user-search-handle">
            {user.handle}
          </Link>
        </li>
      </div>
    )
  }
}