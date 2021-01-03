import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ProfileNavbar from '../nav/profile_navbar';
import ProfileLists from './profile_lists';
import moment from 'moment';
import UserCommentContainer from '../comments/user_comment/user_comment_container';
class ProfileShow extends Component {
  componentDidMount() {
    this.props.fetchThisUser(this.props.match.params.userId)
  }

  render() {
    const { user } = this.props;
    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM D YYYY");
    }
    return user ? (
      <div>
        {/* <ProfileNavbar /> */}
        <div className="profile-show-wrapper">
          <div className='profile-info'>
      
         
          </div>
          <ProfileLists user={user}/>
          <div className="user-info">
            <h1>{`${user.handle}'s Info`}</h1>
            <div className="username">
              <label>Username:
                <strong>{user.handle}</strong>
              </label>
            </div>
            <div className="email">
              <label>Email:
                <strong>{user.email}</strong>
              </label>
            </div>
            <div className="user-created">
              <label>User Created On:
                <strong>{displayCreatedAt(user.date)}</strong>
              </label>
            </div>
            <div className="about-me">
              <label>About me:
                <p></p>
              </label>
            </div>
            {/* favorite movie added from history list */}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default withRouter(ProfileShow);