import React, { Component } from 'react'
import UserSearchIndexItem from './user_search_index_item';

// import MediaComment from '../comments/media_comment/media_comment_container'
export default class UserSearchIndex extends Component {

  componentWillUnmount() {
    this.props.clearUsers()
  }


  render() {


    return (
      <div>
        {(this.props.loggedIn) ? (
          <div className="user-result-wrapper">
            {this.props.users.length !== 0 ? <h1 className="user-header"> Users </h1> : null}
            <ul className="user-search-result">
              {this.props.users.map(user => <UserSearchIndexItem user={user} />)}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}