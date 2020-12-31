import React, { Component } from 'react';
import UserIndexItem from './user_index_item';

export default class UserIndex extends Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          {users.map((user) => <UserIndexItem user={user} key={user.id}/>)}
        </ul>
      </div>
    )
  }
}
