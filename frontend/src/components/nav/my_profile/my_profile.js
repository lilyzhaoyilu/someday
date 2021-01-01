import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MyProfile extends Component {
  componentDidMount() {
    this.props.receiveCurrentUser(this.props.currentUser)
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Link to={`/profile/${currentUser.id}`}>
          My Profile
        </Link>
      </div>
    )
  }
}
