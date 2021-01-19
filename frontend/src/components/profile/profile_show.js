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
    const randomId = Math.floor(Math.random() * 13)
    return user ? (
      <div>
        {/* <ProfileNavbar /> */}
        <div className="profile-show-wrapper">
          <ProfileLists user={user}/>
          <div className="user-info">
            <div className="profile-pic">
              <h1>{`${user.handle}'s Info`}</h1>
              <img src={`https://robohash.org/${randomId}?set=set2`} className="user-pic"/>
            </div>
            <div className="username">
              <label>Username:
                <strong> {user.handle}</strong>
              </label>
            </div>
            <div className="email">
              <label>Email:
                <strong> {user.email}</strong>
              </label>
            </div>
            <div className="user-created">
              <label>User Created On: 
                <strong> {displayCreatedAt(user.date)}</strong>
              </label>
            </div>
            <div className="about-me">
              <label>About me:
                <strong> This user does not have a description.</strong>
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