import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserIndexItem extends Component {
  render() {
    const { user, key } = this.props;
    return (
      <div>
        <Link to={`/profile/${key}`}>
          {user.name}
        </Link>
      </div>
    )
  }
}
