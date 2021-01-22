import React, { Component } from 'react'

import UserSearchIndexItem from './user_search_index_item';

// import MediaComment from '../comments/media_comment/media_comment_container'
export default class UserSearchIndex extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this)
  }
  // componentDidUpdate(prevState) {
  //   if (prevState !== this.nextState) {
  //     setState
  //   } 
  // }
  componentDidMount() {
    this.props.fetchAllUsers()
    // console.log(this.props.input)
  }

  componentWillUnmount() {
    this.props.clearUsers()
  }

  handleFilter() {
    const filteredUsers = this.props.users.filter(user =>
      user.handle.toLowerCase().includes(this.props.input)
    )
    return filteredUsers
  }

  render() {
    console.log(this.props.input)
      const filteredUsers = this.props.users.filter(user =>
        user.handle.toLowerCase().includes(this.props.input.detail.toLowerCase())
      )
      return (
        <div>
          {(this.props.loggedIn) ? (
          <ul className="user-search-result">
            {console.log(filteredUsers)}
            {filteredUsers.map(user => <UserSearchIndexItem user={user} />)}
          </ul>
          ) : null }
        </div>
      )
  }
}